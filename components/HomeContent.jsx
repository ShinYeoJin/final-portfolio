'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Footer from '@/components/Footer';

// useSearchParams를 사용하는 컴포넌트를 직접 export
export default function HomeContent() {
  const searchParams = useSearchParams();
  const noAnim = searchParams.get("noAnim");
  const [rocketDone, setRocketDone] = useState(false);

  useEffect(() => {
    if (noAnim === "true"){
       setRocketDone((prev)=> true);
    }
  }, [noAnim]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#section2') {
      const el = document.getElementById('section2');
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Header는 Section1 위에 겹치도록 absolute */}
      <Header setRocketDone={setRocketDone} />

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

