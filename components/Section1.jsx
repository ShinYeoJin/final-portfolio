'use client';
import { motion } from 'framer-motion';

export default function Section1({ rocketDone, setRocketDone }) {
  return (
    <div
      id="section1"
      className="relative w-full h-screen bg-[url('/KakaoTalk_20251103_151504138.jpg')] bg-cover bg-center flex justify-center items-center overflow-hidden"
    >
      {!rocketDone && (
        <motion.span
          className="absolute bottom-10 right-10 text-[6rem]"
          initial={{ x: 0, y: 0, opacity: 0, rotate: 360, scale: 1 }}
          animate={{
            x: -window.innerWidth * 1.2,
            y: -window.innerHeight * 0.9,
            opacity: 1,
            rotate: 135,
            scale: 1.5,
          }}
          transition={{ duration: 4, ease: 'easeInOut' }}
          onAnimationComplete={() => setRocketDone(true)}
        >
          🛸
        </motion.span>
      )}

      {rocketDone && (
        <motion.div
          className="flex flex-col justify-center items-center text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-9xl font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            Shin Yeo Jin's
          </h1>
          <h1 className="text-9xl font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            Portfolio
          </h1>
          <span className="text-4xl mt-4 text-yellow-50">
            100일간 반짝임을 기록하였습니다.
          </span>
        </motion.div>
      )}
    </div>
  );
}