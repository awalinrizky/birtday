import supabase from '../config/supabase.js';

export const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      throw { statusCode: 400, message: 'No image provided' };
    }

    const file = req.file;
    // Membuat nama file yang unik agar tidak ada bentrok (timestamp + random string)
    const fileExt = file.originalname.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `memories/${fileName}`;

    // Upload ke Supabase Storage (Bucket bernama 'memories')
    const { data, error } = await supabase.storage
      .from('memories')
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
        upsert: false
      });

    if (error) throw { statusCode: 500, message: error.message };

    // Dapatkan Public URL dari Supabase
    const { data: publicUrlData } = supabase.storage
      .from('memories')
      .getPublicUrl(filePath);

    res.status(200).json({
      success: true,
      message: 'Image uploaded successfully',
      url: publicUrlData.publicUrl
    });
  } catch (error) {
    next(error);
  }
};