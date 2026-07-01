import multer from 'multer';

// Kita menggunakan memory storage agar file tidak disimpan di disk server lokal,
// melainkan disimpan di RAM sementara (buffer) lalu langsung dilempar ke Supabase.
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb({ statusCode: 400, message: 'Only image files are allowed!' }, false);
  }
};

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit ukuran file maksimal 5MB
  },
  fileFilter,
});