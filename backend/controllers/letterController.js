import supabase from '../config/supabase.js';

export const getLetters = async (req, res, next) => {
  try {
    const { data, error } = await supabase.from('love_letters').select('*').order('created_at', { ascending: false });
    if (error) throw { statusCode: 500, message: error.message };
    res.status(200).json({ success: true, data });
  } catch (error) { next(error); }
};

export const createLetter = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { data, error } = await supabase.from('love_letters').insert([{ title, content }]).select().single();
    if (error) throw { statusCode: 500, message: error.message };
    res.status(201).json({ success: true, data });
  } catch (error) { next(error); }
};