import db from "../config/db.js";

export const login = async (req, res) => {

    const { username, password } = req.body;

    try {

        const [rows] = await db.query(

            "SELECT * FROM admins WHERE username=?",

            [username]

        );

        if (rows.length === 0) {

            return res.status(401).json({

                success:false,

                message:"Username salah"

            });

        }

        const user = rows[0];

        if(password !== user.password){

            return res.status(401).json({

                success:false,

                message:"Password salah"

            });

        }

        res.json({

            success:true,

            message:"Login berhasil"

        });

    } catch(err){

        res.status(500).json({

            success:false,

            message:err.message

        });

    }

}