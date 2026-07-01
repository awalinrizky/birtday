import MainLayout from "../layouts/MainLayout";

import Hero from "../components/sections/Hero";
import LoveCounter from "../components/sections/LoveCounter";
import OurStory from "../components/sections/OurStory";
import Gallery from "../components/sections/Gallery";
import LoveLetter from "../components/sections/LoveLetter";
import Playlist from "../components/sections/Playlist";
import Future from "../components/sections/Future";

export default function Home() {
  return (
    <MainLayout>

      <Hero />

      <LoveCounter />

      <OurStory />

      <Gallery />

      <LoveLetter />

      <Playlist />

      <Future />

    </MainLayout>
  );
}