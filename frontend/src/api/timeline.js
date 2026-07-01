import api from "./axios";

export const getTimelines = () =>
  api.get("/timelines");

export const createTimeline = (formData) =>
  api.post("/timelines", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateTimeline = (id, formData) =>
  api.put(`/timelines/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteTimeline = (id) =>
  api.delete(`/timelines/${id}`);