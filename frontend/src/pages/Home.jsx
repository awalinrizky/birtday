import MainLayout from "../layouts/MainLayout";

import Hero from "../components/sections/Hero";
import LoveCounter from "../components/sections/LoveCounter";
import Gallery from "../components/sections/Gallery";
import LoveLetter from "../components/sections/LoveLetter";
import Playlist from "../components/sections/Playlist";
import Future from "../components/sections/Future";
import BirthdayWish from "../components/sections/BirthdayWish";

export default function Home({ audioRef }) {
  return (
    <MainLayout audioRef={audioRef}>
      <Hero />

      <LoveCounter />

      <BirthdayWish />

      <Gallery />

      <LoveLetter />

      <Playlist />

      <Future />
    </MainLayout>
  );
}
