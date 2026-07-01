import db from "../config/db.js";

export const getTimelines = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM timelines ORDER BY event_date ASC"
    );

    res.json({
      success: true,
      data: rows,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const createTimeline = async (req, res) => {
  try {
    const { event_date, title, description } = req.body;

    const image = req.file ? req.file.filename : null;

    await db.query(
      `INSERT INTO timelines
      (event_date,title,description,image)
      VALUES (?,?,?,?)`,
      [event_date, title, description, image]
    );

    res.json({
      success: true,
      message: "Timeline created",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const updateTimeline = async (req, res) => {
  res.json({
    success: true,
    message: "Update timeline belum dibuat",
  });
};

export const deleteTimeline = async (req, res) => {
  res.json({
    success: true,
    message: "Delete timeline belum dibuat",
  });
};