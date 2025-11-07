'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const searchParams = useSearchParams();
  const noAnim = searchParams.get("noAnim");
  const [rocketDone, setRocketDone] = useState(false);

  useEffect(() => {
    if (noAnim === "true"){
       setRocketDone((prev)=> true);
    }
  }, [noAnim]);

  return (
    <div
      className="relative w-full h-full"
      style={{ cursor: "url('/rocket.png') 16 16, auto" }}
    >
      {/* Header는 Section1 위에 겹치도록 absolute */}
      <Header setRocketDone={setRocketDone} />

      {/* Music Player */}
      <div className="fixed top-4 right-4 z-[9999]">
        <MusicPlayer />
      </div>

      {/* Sections */}
      <Section1 rocketDone={rocketDone} setRocketDone={setRocketDone} />
      <Section2 />
      <Section3 />
      <Footer />

      {/* 로켓 애니메이션 오버레이 (초기 진입 시만) */}
      {!rocketDone && noAnim !== "true" && (
        <div className="fixed top-0 left-0 w-full h-full z-[999] flex justify-center items-center overflow-hidden bg-black">
          <Section1 rocketDone={rocketDone} setRocketDone={setRocketDone} />
        </div>
      )}
    </div>
  );
}