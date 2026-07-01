import { useState } from "react";

export default function TimelineModal({ open, onClose, onSave }) {
  const [form, setForm] = useState({
    event_date: "",
    title: "",
    description: "",
    image: null,
  });

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.event_date || !form.title || !form.description) {
      alert("Lengkapi semua data.");
      return;
    }

    const data = new FormData();

    data.append("event_date", form.event_date);
    data.append("title", form.title);
    data.append("description", form.description);

    if (form.image) {
      data.append("image", form.image);
    }

    onSave(data);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Add Timeline</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="date"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                event_date: e.target.value,
              })
            }
          />

          <input
            placeholder="Title"
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Description"
            className="w-full border p-3 rounded-lg"
            rows="4"
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <input
            type="file"
            onChange={(e) =>
              setForm({
                ...form,
                image: e.target.files[0],
              })
            }
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button className="bg-rose-500 text-white px-5 py-2 rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
