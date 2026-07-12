import Contact from "@/components/Contact";
import Doors from "@/components/Doors";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ScrollEffects from "@/components/ScrollEffects";
import SpeakingBand from "@/components/SpeakingBand";
import Spine from "@/components/Spine";
import Story from "@/components/Story";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Spine />
      <ScrollEffects />
      <Nav />
      <Hero />
      <Story />
      <Work />
      <SpeakingBand />
      <Doors />
      <Contact />
      <Footer />
    </>
  );
}
