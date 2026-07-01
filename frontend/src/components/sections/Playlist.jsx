import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Playlist() {
  return (
    <section id="playlist" className="py-24 md:py-28 bg-paper">
      <Container>

        <SectionTitle
          eyebrow="Our Playlist"
          title="Songs That Remind Me of You"
          description="A collection of songs that remind us of our journey together."
        />

        <div className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-gold-soft">
          <iframe
            title="Our Playlist"
            src="https://open.spotify.com/embed/playlist/PLAYLIST_ID"
            width="100%"
            height="400"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

        <p className="text-center text-xs text-ink-soft mt-4 italic">
          * Ganti "PLAYLIST_ID" di kode dengan link Spotify playlist asli kalian.
        </p>

      </Container>
    </section>
  );
}
