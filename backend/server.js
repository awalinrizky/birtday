import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import timelineRoutes from "./routes/timelineRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(
  "/uploads",
  express.static("uploads")
);
// app.use(
//   "/uploads",
//   express.static(path.join(__dirname, "uploads"))
// );
app.use("/api/timelines", timelineRoutes);
app.use("/api/auth",authRoutes);



app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server running http://localhost:${process.env.PORT}`
  );
});