import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';

// Inisialisasi API Guerilla kita
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' },
});

export default function BirthdayWish({ finished }) {
  // Kalau countdown belum habis, sembunyikan section ini
  if (!finished) return null;

  const [wishes, setWishes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [myWish, setMyWish] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ambil permohonan yang udah di-save cewek lo dari database
  const fetchWishes = async () => {
    try {
      // Kita numpang pake endpoint letters yang udah beres tadi biar cepet
      const response = await axiosInstance.get('/letters');
      setWishes(response.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSaveWish = async (e) => {
    e.preventDefault();
    if (!myWish.trim()) return;

    setIsSubmitting(true);
    try {
      await axiosInstance.post('/letters', {
        title: "Ica's Wish 🎂",
        content: myWish
      });
      toast.success('Permohonan kamu sudah disimpan semesta, Sayang! ✨');
      setMyWish('');
      setIsOpen(false);
      fetchWishes(); // Refresh list bawah
    } catch (error) {
      toast.error('Gagal menyimpan permohonan');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-warmWhite px-4 py-20 relative overflow-hidden">
      {/* Efek Latar Belakang Romantis */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-roseGold/10 rounded-full blur-[120px]" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-2xl w-full text-center space-y-12"
      >
        {/* Header Besar */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-serif text-darkText tracking-wide">
            Happy 23rd Birthday, Sayang! 🤍
          </h1>
          <div className="w-24 h-px bg-roseGold mx-auto mt-4" />
        </div>

        {/* PERMOHONAN PERTAMA: Dari Lo (Hardcoded Manis) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-beige/50 shadow-sm text-left relative"
        >
          <div className="absolute -top-3 left-6 bg-roseGold text-white text-xs uppercase tracking-widest px-3 py-1 rounded-full font-medium">
            From Your Man
          </div>
          <h3 className="font-serif text-xl text-darkText mt-2 mb-3">Semoga di Tahun Ini...</h3>
          <p className="font-sans text-mutedText leading-relaxed text-sm md:text-base">
            "Selamat ulang tahun yang ke-23, cantik. Di umur yang baru ini, doa terbaik aku selalu menyertai kamu. 
            Semoga sayang bisa jadi pribadi yang lebih baik lagi, selalu dilimpahkan kebahagiaan, disehatkan fisiknya, 
            dan didekatkan sama semua impian yang pengen kamu kejar. Aku bakal selalu ada di sini, di setiap langkah 
            dan tahun-tahun kamu berikutnya. I love you so much."
          </p>
        </motion.div>

        {/* TOMBOL UNTUK CEWEK LO NGETIK PERMOHONAN */}
        <div>
          {!isOpen && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="bg-roseGold text-white px-8 py-3 rounded-full font-sans tracking-widest text-sm uppercase shadow-md hover:bg-dustyPink transition"
            >
              Make Your 23rd Wish ✨
            </motion.button>
          )}

          {/* Form Input yang Muncul Pop-up Anggun */}
          <AnimatePresence>
            {isOpen && (
              <motion.form 
                initial={{ opacity: 0, h: 0 }}
                animate={{ opacity: 1, h: 'auto' }}
                exit={{ opacity: 0 }}
                onSubmit={handleSaveWish}
                className="mt-6 space-y-4 bg-white p-6 rounded-2xl border border-beige shadow-lg max-w-md mx-auto text-left"
              >
                <label className="block text-xs uppercase tracking-widest text-mutedText font-medium">
                  Tulis harapan kamu di umur ke-23 di sini...
                </label>
                <textarea
                  value={myWish}
                  onChange={(e) => setMyWish(e.target.value)}
                  rows="4"
                  placeholder="Aku berharap di umur 23 ini..."
                  className="w-full border border-beige p-3 text-sm rounded-xl focus:outline-none focus:border-roseGold bg-warmWhite/20 resize-none text-darkText"
                  required
                />
                <div className="flex gap-2 justify-end">
                  <button 
                    type="button" 
                    onClick={() => setIsOpen(false)} 
                    className="px-4 py-2 text-xs text-mutedText uppercase tracking-wider hover:text-darkText"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-roseGold text-white px-4 py-2 text-xs rounded-lg uppercase tracking-wider hover:bg-dustyPink transition disabled:opacity-50"
                  >
                    {isSubmitting ? 'Saving...' : 'Save Wish'}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* LIST PERMOHONAN CEWEK LO YANG SUDAH DI-SAVE */}
        {wishes.length > 0 && (
          <div className="space-y-4 pt-6 text-left">
            <h4 className="text-xs uppercase tracking-widest text-mutedText font-semibold px-2">
              Your Saved Wishes 🎂
            </h4>
            <div className="space-y-4">
              {wishes.map((wish) => (
                <motion.div
                  key={wish.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white/40 border border-beige/40 p-5 rounded-xl backdrop-blur-sm"
                >
                  <p className="font-sans text-darkText text-sm leading-relaxed whitespace-pre-wrap">
                    {wish.content}
                  </p>
                  <span className="block text-[10px] text-mutedText/70 mt-2 font-mono">
                    Locked at {new Date(wish.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}