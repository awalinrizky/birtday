import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Trash2, Plus, Clock } from 'lucide-react';
import axios from 'axios';

// Kita inisialisasi langsung di sini supaya nggak perlu file terpisah
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});
export default function TimelineManager() {
  const [timelines, setTimelines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  // READ: Fetch data
  const fetchTimelines = async () => {
    try {
      const response = await axiosInstance.get('/timelines');
      setTimelines(response.data.data || []);
    } catch (error) {
      toast.error('Failed to load timeline');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTimelines();
  }, []);

  // CREATE: Add new memory
  const onSubmit = async (data) => {
    try {
      await axiosInstance.post('/timelines', data);
      toast.success('Memory added successfully!');
      reset();
      fetchTimelines();
    } catch (error) {
      toast.error('Failed to add memory');
    }
  };

  // DELETE: Remove memory
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this memory?')) return;
    try {
      await axiosInstance.delete(`/timelines/${id}`);
      toast.success('Memory deleted');
      fetchTimelines();
    } catch (error) {
      toast.error('Failed to delete memory');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-darkText">Timeline Manager</h1>
        <p className="text-mutedText text-sm mt-1">Add and manage your love story milestones.</p>
      </div>

      {/* Form Card */}
      <div className="bg-white p-6 rounded-xl border border-beige shadow-sm">
        <h2 className="text-lg font-serif text-darkText mb-4 flex items-center gap-2">
          <Plus className="w-4 h-4 text-roseGold" /> Add New Memory
        </h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-mutedText mb-1">Title</label>
              <input 
                {...register('title', { required: true })}
                className="w-full border border-beige rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-roseGold"
                placeholder="e.g., The First Hello"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-mutedText mb-1">Date</label>
              <input 
                type="date"
                {...register('event_date', { required: true })}
                className="w-full border border-beige rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-roseGold"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-mutedText mb-1">Description</label>
            <textarea 
              {...register('description', { required: true })}
              rows="3"
              className="w-full border border-beige rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-roseGold resize-none"
              placeholder="Write the story behind this moment..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-roseGold text-white px-6 py-2 rounded-lg text-sm uppercase tracking-widest hover:bg-dustyPink transition disabled:opacity-50"
          >
            {isSubmitting ? 'Saving...' : 'Save Memory'}
          </button>
        </form>
      </div>

      {/* Timeline List */}
      <div className="bg-white rounded-xl border border-beige shadow-sm overflow-hidden">
        <div className="p-4 bg-warmWhite border-b border-beige font-serif text-darkText flex items-center gap-2">
          <Clock className="w-4 h-4 text-roseGold" /> Saved Memories
        </div>
        
        <div className="divide-y divide-beige">
          {isLoading ? (
            <div className="p-8 text-center text-mutedText text-sm">Loading memories...</div>
          ) : timelines.length === 0 ? (
            <div className="p-8 text-center text-mutedText text-sm">No memories added yet.</div>
          ) : (
            timelines.map((item) => (
              <div key={item.id} className="p-4 flex justify-between items-start hover:bg-warmWhite/50 transition">
                <div>
                  <h3 className="font-serif text-darkText">{item.title}</h3>
                  <p className="text-xs text-roseGold font-medium mt-1">{item.event_date}</p>
                  <p className="text-sm text-mutedText mt-2 max-w-xl">{item.description}</p>
                </div>
                <button 
                  onClick={() => handleDelete(item.id)}
                  className="text-mutedText hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}