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

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});