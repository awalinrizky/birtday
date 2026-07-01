import { useEffect, useState } from "react";

import AdminLayout from "../../layouts/AdminLayout";
import TimelineTable from "../../components/admin/TimelineTable";
import TimelineModal from "../../components/admin/TimelineModal";

import {
  getTimelines,
  createTimeline,
} from "../../api/timeline";

export default function Timeline() {
  const [timelines, setTimelines] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchTimeline();
  }, []);

  const fetchTimeline = async () => {
    try {
      const res = await getTimelines();
      setTimelines(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreate = async (formData) => {
    try {
      await createTimeline(formData);

      fetchTimeline();

      setOpenModal(false);
    } catch (err) {
      console.log(err);
      alert("Gagal menambah timeline");
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Timeline Manager
        </h1>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-rose-500 text-white px-5 py-2 rounded-lg"
        >
          + Add Timeline
        </button>
      </div>

      <TimelineTable timelines={timelines} />

      <TimelineModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleCreate}
      />
    </AdminLayout>
  );
}