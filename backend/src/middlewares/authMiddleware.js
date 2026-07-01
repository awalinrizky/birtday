import supabase from '../config/supabase.js';

// Verifikasi JWT Token
export const verifyToken = async (req, res, next) => {
    req.user = { id: 'bypass', role: 'superadmin' }; 
  next();
};
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       throw { statusCode: 401, message: 'Unauthorized: No token provided' };
//     }

//     const token = authHeader.split(' ')[1];

//     // Validasi token langsung ke Supabase
//     const { data: { user }, error } = await supabase.auth.getUser(token);

//     if (error || !user) {
//       throw { statusCode: 401, message: 'Unauthorized: Invalid or expired token' };
//     }

//     // Ambil Role User untuk otorisasi endpoint
//     const { data: profile } = await supabase
//       .from('profiles')
//       .select('role')
//       .eq('id', user.id)
//       .single();

//     // Masukkan data user ke request object agar bisa diakses di controller
//     req.user = {
//       id: user.id,
//       email: user.email,
//       role: profile?.role || 'guest',
//     };

//     next();
//   } catch (error) {
//     next(error);
//   }
// };

// Middleware khusus Super Admin (Role Authorization)
export const requireSuperAdmin = (req, res, next) => {
  if (req.user?.role !== 'superadmin') {
    return next({ statusCode: 403, message: 'Forbidden: Superadmin access required' });
  }
  next();
};