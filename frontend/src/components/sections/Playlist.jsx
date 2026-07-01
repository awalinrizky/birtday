export default function Playlist() {
  // GANTI teks di bawah ini dengan ID Playlist YouTube Music kalian!
  const playlistId = "PLSpUgMOWHmtT_aNSKpoL4TRXdsTDcbCYn&si=KAHeKvAlSuvKMuH7"; 

  return (
    <div className="pt-12 pb-20 px-4 max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <span className="text-roseGold font-serif italic tracking-widest text-sm">Our Playlist</span>
        <h2 className="text-4xl font-serif text-darkText mt-2">Songs That Remind Me of You</h2>
        <p className="text-mutedText font-sans text-sm mt-2">A collection of songs that remind us of our journey together.</p>
      </div>

      {/* EMBED PLAYER PREMIUM */}
      <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-md border border-beige/40">
        <iframe
          src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
          title="YouTube Music Playlist"
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}