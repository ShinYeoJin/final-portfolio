import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MusicPlayer from "@/components/MusicPlayer";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <MusicPlayer />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>);
}
