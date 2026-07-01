import supabase from '../config/supabase.js';

// REGISTER NEW USER
export const register = async (req, res, next) => {
  try {
    const { email, password, fullName, role } = req.body;

    if (!email || !password || !fullName) {
      throw { statusCode: 400, message: 'Email, password, and full name are required' };
    }

    // 1. Daftarkan user ke sistem Auth Supabase
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) throw { statusCode: 400, message: authError.message };
    if (!authData.user) throw { statusCode: 400, message: 'Registration failed' };

    // 2. Simpan data tambahan (Nama, Role) ke tabel 'profiles'
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([
        {
          id: authData.user.id,
          full_name: fullName,
          role: role || 'partner', // Default ke partner jika tidak diisi
        },
      ]);

    if (profileError) throw { statusCode: 400, message: profileError.message };

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: authData.user.id,
        email: authData.user.email,
        full_name: fullName,
        role: role || 'partner'
      }
    });
  } catch (error) {
    next(error);
  }
};

// LOGIN USER
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw { statusCode: 400, message: 'Email and password required' };

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw { statusCode: 401, message: 'Invalid email or password' };

    // --- DEBUGGING LINE ---
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('full_name, role')
      .eq('id', data.user.id)
      .single();

    if (profileError) {
      console.error("PROFILE ERROR:", profileError); // Lihat ini di terminal backend
      throw { statusCode: 500, message: 'Profile fetch failed' };
    }

    res.status(200).json({
      success: true,
      token: data.session.access_token,
      user: { id: data.user.id, email: data.user.email, full_name: profile.full_name, role: profile.role }
    });
  } catch (error) {
    next(error);
  }
};