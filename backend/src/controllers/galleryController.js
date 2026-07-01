import supabase from '../config/supabase.js';

export const getGallery = async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .is('deleted_at', null)
      .order('created_at', { ascending: false });

    if (error) throw { statusCode: 500, message: error.message };
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

export const createGallery = async (req, res, next) => {
  try {
    const { caption, image_url, taken_at } = req.body;
    
    if (!image_url) {
      throw { statusCode: 400, message: 'Image URL is required' };
    }

    const { data, error } = await supabase
      .from('gallery')
      .insert([{ caption, image_url, taken_at }])
      .select()
      .single();

    if (error) throw { statusCode: 500, message: error.message };
    res.status(201).json({ success: true, message: 'Photo added to gallery', data });
  } catch (error) {
    next(error);
  }
};

export const deleteGallery = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('gallery')
      .update({ deleted_at: new Date().toISOString() })
      .eq('id', id);

    if (error) throw { statusCode: 500, message: error.message };
    res.status(200).json({ success: true, message: 'Photo removed from gallery' });
  } catch (error) {
    next(error);
  }
};