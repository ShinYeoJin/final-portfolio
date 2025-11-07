'use client';
import { motion } from 'framer-motion';
import Introduce1 from "@/components/Introduce1";
import Introduce2 from "@/components/Introduce2";
import Introduce3 from "@/components/Introduce3";

export default function Section3() {
  // 각 Introduce 박스에 적용할 애니메이션 설정
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.4, // Introduce1 → Introduce2 → Introduce3 순차적 등장
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      id="section3"
      className="relative w-full min-h-[400px] flex flex-col justify-center items-center bg-violet-600 gap-[20px] py-[50px]"
    >
      <h1 className="text-5xl mb-[30px] text-white">🪐 INTRODUCE 🪐</h1>

      {/* Introduce 컴포넌트들을 감싸는 영역 */}
      <div className="flex flex-row justify-center items-start gap-[200px]">
        {[Introduce1, Introduce2, Introduce3].map((Introduce, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // 화면에 30% 이상 보이면 실행, 한 번만
          >
            <Introduce />
          </motion.div>
        ))}
      </div>
    </div>
  );
}       