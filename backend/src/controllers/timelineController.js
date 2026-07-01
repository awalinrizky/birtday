import supabase from '../config/supabase.js';

// READ
export const getTimelines = async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('timelines')
      .select('*')
      .order('event_date', { ascending: true });
    if (error) throw { statusCode: 500, message: error.message };
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// CREATE (Bypass User ID)
export const createTimeline = async (req, res, next) => {
  try {
    const { title, description, event_date, image_url } = req.body;
    const { data, error } = await supabase
      .from('timelines')
      .insert([{ title, description, event_date, image_url }])
      .select()
      .single();
    if (error) throw { statusCode: 500, message: error.message };
    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// DELETE
export const deleteTimeline = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('timelines')
      .delete()
      .eq('id', id);
    if (error) throw { statusCode: 500, message: error.message };
    res.status(200).json({ success: true, message: 'Deleted' });
  } catch (error) {
    next(error);
  }
};