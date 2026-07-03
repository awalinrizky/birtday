import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';

// FIX 1: Wajib pakai HTTPS dan ada /api di belakangnya biar gak diblokir browser!
const axiosInstance = axios.create({
  baseURL: 'https://birtday-production-9852.up.railway.app/api',
  headers: { 'Content-Type': 'application/json' },
});

export default function BirthdayWish({ finished }) {
  if (!finished) return null;

  const [wishes, setWishes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [myWish, setMyWish] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchWishes = async () => {
    try {
      const response = await axiosInstance.get('/timelines');
      const allData = response.data.data || [];
      const onlyWishes = allData.filter(item => item.title === "Wish dari Ica 🤍");
      setWishes(onlyWishes);
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
      await axiosInstance.post('/timelines', {
        title: "Wish dari Ica 🤍",
        description: myWish,
        event_date: new Date().toISOString(),
        image_url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80"
      });
      toast.success('Harapan kamu berhasil disimpan semesta! ✨');
      setMyWish('');
      setIsOpen(false);
      fetchWishes(); 
    } catch (error) {
      toast.error('Gagal menyimpan, coba lagi sayang');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-200 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-rose-200 rounded-full blur-[100px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-3xl w-full text-center flex flex-col gap-12"
      >
        {/* Header */}
        <div className="flex flex-col gap-4 mt-8">
          <h1 className="text-5xl md:text-6xl font-serif text-slate-800 tracking-wide drop-shadow-sm">
            Happy 23rd Birthday, <br/> Sayang! 🤍
          </h1>
          <p className="text-rose-400 tracking-[0.2em] text-sm font-medium uppercase">
            Welcome to your special chapter
          </p>
        </div>

        {/* Surat dari Lo */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white/80 backdrop-blur-xl p-8 pt-12 md:p-12 md:pt-14 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white relative text-left mt-4"
        >
          <div className="absolute -top-5 left-8 bg-gradient-to-r from-rose-400 to-pink-500 text-white text-xs uppercase tracking-widest px-6 py-2 rounded-full font-bold shadow-lg shadow-rose-200">
            From Your Man
          </div>
          <h3 className="font-serif text-2xl text-slate-800 mb-4">Semoga di Tahun Ini...</h3>
          
          {/* FIX 2: Teks surat udah digabung bersih tanpa ada nyelip komentar // yang bikin error */}
          <p className="font-sans text-slate-600 leading-relaxed text-base md:text-lg italic">
            "Selamat ulang tahun yang ke-23, cantikk. Di umur yang baru ini, doa terbaik aku selalu menyertai kamu. 
            Semoga sayang bisa jadi pribadi yang lebih baik lagi, selalu dilimpahkan kebahagiaan, disehatkan fisiknya, 
            dan didekatkan sama semua impian yang pengen kamu kejar. Aku bakal selalu ada di sini, di setiap langkah 
            dan tahun-tahun kamu berikutnya. I love you so much Icaa💖"
          </p>
        </motion.div>

        {/* Tombol Buat Nulis Wish */}
        <div>
          {wishes.length === 0 && !isOpen && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="bg-slate-800 text-white px-10 py-4 rounded-full font-sans tracking-[0.15em] text-sm uppercase shadow-2xl hover:bg-slate-700 transition duration-300"
            >
              Make Your 23rd Wish ✨
            </motion.button>
          )}

          {/* Form Input Mewah */}
          <AnimatePresence>
            {isOpen && (
              <motion.form 
                initial={{ opacity: 0, height: 0, scale: 0.9 }}
                animate={{ opacity: 1, height: 'auto', scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.9 }}
                onSubmit={handleSaveWish}
                className="bg-white p-8 rounded-[2rem] shadow-2xl border border-rose-50 max-w-xl mx-auto text-left"
              >
                <label className="block text-sm uppercase tracking-widest text-rose-400 font-bold mb-1">
                  Tulis Harapan Kamu Di Sini
                </label>
                <p className="text-xs text-rose-500 italic mb-4 font-medium">
                  *Tiati cantik, harapan ini cuma bisa dikirim sekali aja lho! 🤫
                </p>
                
                <textarea
                  value={myWish}
                  onChange={(e) => setMyWish(e.target.value)}
                  rows="5"
                  placeholder="Di umur 23 ini, aku berharap..."
                  className="w-full border-2 border-rose-100 p-4 text-base rounded-2xl focus:outline-none focus:border-rose-400 bg-rose-50/30 resize-none text-slate-700 transition"
                  required
                />
                <div className="flex gap-4 justify-end mt-6">
                  <button 
                    type="button" 
                    onClick={() => setIsOpen(false)} 
                    className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-slate-700 transition"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-8 py-3 text-xs rounded-full font-bold uppercase tracking-widest shadow-lg shadow-rose-200 hover:shadow-rose-300 transition disabled:opacity-50"
                  >
                    {isSubmitting ? 'Menyimpan...' : 'Kirim Harapan'}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* LIST PERMOHONAN CEWEK LO */}
        {wishes.length > 0 && (
          <div className="space-y-6 pt-2 text-left max-w-2xl mx-auto w-full">
            <h4 className="text-center text-sm uppercase tracking-[0.2em] text-rose-400 font-bold">
              Harapan Kamu Yang Tersimpan 🤍
            </h4>
            <div className="space-y-6">
              {wishes.map((wish) => (
                <motion.div
                  key={wish.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/60 border border-white p-6 md:p-8 rounded-[2rem] shadow-xl backdrop-blur-md relative mt-4"
                >
                  <div className="absolute -top-4 left-8 bg-white px-4 py-1 rounded-full border border-rose-100 shadow-sm">
                    <span className="text-[10px] text-slate-400 font-mono font-bold tracking-wider">
                      {new Date(wish.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                  <p className="font-sans text-slate-700 text-base md:text-lg leading-relaxed whitespace-pre-wrap mt-2">
                    {wish.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}