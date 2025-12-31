'use client';
import { motion } from 'framer-motion';
import Introduce1 from "@/components/Introduce1";
import Introduce2 from "@/components/Introduce2";
import Introduce3 from "@/components/Introduce3";

export default function Section3() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      id="section3"
      className="relative w-full min-h-[500px] flex flex-col justify-center items-center bg-[url('/KakaoTalk_2.jpg')] bg-cover bg-center bg-fixed gap-8 py-12 px-4"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 font-extrabold text-center flex justify-center items-center gap-2">
        <span className="text-white">🪐</span>
        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          INTRODUCE
        </span>
        <span className="text-white">🪐</span>
      </h1>



      {/* Introduce 카드 영역 */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl">
        {[Introduce1, Introduce2, Introduce3].map((Introduce, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 min-h-[450px]" // 카드 높이 균일
          >
            <Introduce />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
