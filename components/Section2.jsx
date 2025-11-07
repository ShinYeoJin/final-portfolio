'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Section2() {
  // ✅ 각 원마다 다른 글자(label) 추가
  const projects = [
    { id: 1, path: '/projects/project1', color: '#FF6B6B', label: 'Project 1' },
    { id: 2, path: '/projects/project2', color: '#4ECDC4', label: 'Project 2' },
    { id: 3, path: '/projects/project3', color: '#FFD93D', label: 'Project 3' },
    { id: 4, path: '/projects/project4', color: '#1A535C', label: 'Project 4' },
    { id: 5, path: '/projects/project5', color: '#FF9F1C', label: 'Project 5' },
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
      ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-[url('../public/KakaoTalk_2.jpg')] bg-cover bg-center z-50"     
    >
      {sectionSize.w > 0 &&
        projects.map((p, i) => {
          const size = 60 + Math.random() * 60; // 60~120px 랜덤 크기
          const radiusX = sectionSize.w * 0.3 + Math.random() * sectionSize.w * 0.1;
          const radiusY = sectionSize.h * 0.3 + Math.random() * sectionSize.h * 0.1;
          const duration = 30 + Math.random() * 15;

          return (
            <OrbitingCircle
              key={p.id}
              color={p.color}
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
  color,
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
          backgroundColor: color,
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
        {label && <span style={{ fontSize: size * 0.2 }}>{label}</span>}
      </motion.div>
    </Link>
  );
}
