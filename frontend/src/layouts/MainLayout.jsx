import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MusicButton from "../components/ui/MusicButton";

export default function MainLayout({ children, audioRef }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <MusicButton audioRef={audioRef} />

      <Footer />
    </>
  );
}