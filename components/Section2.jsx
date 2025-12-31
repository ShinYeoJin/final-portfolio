'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Section2() {
  // ✅ 각 원마다 다른 글자(label) 추가
  const projects = [
    { id: 1, path: '/projects/project1', gradient: 'linear-gradient(135deg, #FF6B6B, #FFB86C)', label: 'Project 1' },
    { id: 2, path: '/projects/project2', gradient: 'linear-gradient(135deg, #4ECDC4, #48A9A6)', label: 'Project 2' },
    { id: 3, path: '/projects/project3', gradient: 'linear-gradient(135deg, #FFD93D, #FF6F61)', label: 'Project 3' },
    { id: 4, path: '/projects/project4', gradient: 'linear-gradient(135deg, #1A535C, #3C91E6)', label: 'Project 4' },
    { id: 5, path: '/projects/project5', gradient: 'linear-gradient(135deg, #FF9F1C, #FF4E50)', label: 'Project 5' },
    { id: 6, path: '/projects/project6', gradient: 'linear-gradient(135deg, #6A82FB, #FC5C7D)', label: 'Project 6' },
  ];
  

  const sectionRef = useRef(null);
  const [sectionSize, setSectionSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setSectionSize({ w: rect.width, h: rect.height });
    }
  }, []);

  const generateInitialAngles = () => {
    return projects.map((_, i) => (i / projects.length) * 360);
  };
  const initialAngles = generateInitialAngles();

  return (
    <section id="section2"
      ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-[url('/KakaoTalk_2.jpg')] bg-cover bg-center bg-fixed z-50"     
    >
      {sectionSize.w > 0 &&
        projects.map((p, i) => {
          // 반응형 크기 조정: 모바일에서 작게, 데스크탑에서 크게
          const baseSize = sectionSize.w < 640 ? 40 : sectionSize.w < 1024 ? 50 : 60;
          const size = baseSize + Math.random() * (baseSize * 0.5);
          const radiusX = sectionSize.w * 0.25 + Math.random() * sectionSize.w * 0.1;
          const radiusY = sectionSize.h * 0.25 + Math.random() * sectionSize.h * 0.1;
          const duration = 30 + Math.random() * 15;

          return (
            <OrbitingCircle
              key={p.id}
              gradient={p.gradient}
              href={p.path}
              radiusX={radiusX}
              radiusY={radiusY}
              duration={duration}
              sectionWidth={sectionSize.w}
              sectionHeight={sectionSize.h}
              initialAngle={initialAngles[i]}
              size={size}
              label={p.label} // ✅ 각 원 글자 전달
            />
          );
        })}
    </section>
  );
}

function OrbitingCircle({
  gradient,
  href,
  radiusX,
  radiusY,
  duration,
  sectionWidth,
  sectionHeight,
  initialAngle,
  size,
  label,
}) {
  const centerX = sectionWidth / 2 - size / 2;
  const centerY = sectionHeight / 2 - size / 2;

  const steps = 400;
  const xKeyframes = [];
  const yKeyframes = [];

  for (let i = 0; i <= steps; i++) {
    const angle = ((initialAngle + (360 * i) / steps) * Math.PI) / 180;
    xKeyframes.push(centerX + radiusX * Math.cos(angle));
    yKeyframes.push(centerY + radiusY * Math.sin(angle));
  }

  return (
    <Link href={href}>
      <motion.div
        className="absolute rounded-full cursor-pointer shadow-lg flex justify-center items-center text-white font-bold text-center"
        style={{
          width: size,
          height: size,
          background: gradient,
        }}
        animate={{
          x: xKeyframes,
          y: yKeyframes,
          rotate: [0, 360],
        }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
        }}
        whileHover={{
          scale: 1.2,
          boxShadow: '0 0 25px rgba(0,0,0,0.3)',
        }}
      >
        {label && (
          <span 
            className="text-xs sm:text-sm md:text-base"
            style={{ fontSize: Math.max(size * 0.15, 10) }}
          >
            {label}
          </span>
        )}
      </motion.div>
    </Link>
  );
}
