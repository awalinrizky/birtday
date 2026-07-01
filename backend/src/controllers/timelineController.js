export const createTimeline = async (req, res) => {

  try {

    const {
      event_date,
      title,
      description,
    } = req.body;

    const image = req.file
      ? req.file.filename
      : null;

    await db.query(
      `
      INSERT INTO timelines
      (event_date,title,description,image)
      VALUES (?,?,?,?)
      `,
      [
        event_date,
        title,
        description,
        image,
      ]
    );

    res.json({
      success: true,
      message: "Timeline created",
    });

  } catch (err) {

    console.log(err);

    res.status(500).json(err);

  }

};