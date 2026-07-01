import express from "express";

import {
  getTimelines,
  createTimeline,
  updateTimeline,
  deleteTimeline,
} from "../controllers/timelineController.js";

import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getTimelines);

router.post(
  "/",
  upload.single("image"),
  createTimeline
);

router.put(
  "/:id",
  upload.single("image"),
  updateTimeline
);

router.delete(
  "/:id",
  deleteTimeline
);

export default router;