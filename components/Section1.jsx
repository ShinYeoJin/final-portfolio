'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Section1({ rocketDone, setRocketDone }) {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // SSR 안전: window는 클라이언트에서만 접근
    const updateSize = () => {
      if (typeof window !== 'undefined') {
        setViewport({ width: window.innerWidth, height: window.innerHeight });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const rocketAnimate =
    viewport.width && viewport.height
      ? {
          x: -viewport.width * 1.2,
          y: -viewport.height * 0.9,
          opacity: 1,
          rotate: 135,
          scale: 1.5,
        }
      : {
          // 초기 렌더(SSR) 시엔 살짝만 이동해서 대체
          x: -500,
          y: -400,
          opacity: 1,
          rotate: 135,
          scale: 1.5,
        };

  return (
    <div
      id="section1"
      className="relative w-full h-screen bg-[url('/KakaoTalk_20251103_151504138.jpg')] bg-cover bg-center flex justify-center items-center overflow-hidden"
    >
      {!rocketDone && (
        <motion.span
          className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 text-4xl sm:text-6xl md:text-[6rem]"
          initial={{ x: 0, y: 0, opacity: 0, rotate: 360, scale: 1 }}
          animate={rocketAnimate}
          transition={{ duration: 4, ease: 'easeInOut' }}
          onAnimationComplete={() => setRocketDone(true)}
        >
          🛸
        </motion.span>
      )}

      {rocketDone && (
        <motion.div
          className="flex flex-col justify-center items-center text-white text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            Shin Yeo Jin's
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            Portfolio
          </h1>
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-2 sm:mt-4 text-yellow-50">
            100일간 반짝임을 기록하였습니다.
          </span>
        </motion.div>
      )}
    </div>
  );
}