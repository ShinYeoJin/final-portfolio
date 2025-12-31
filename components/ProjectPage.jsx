'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectPage({ title, description, imageSrc, visitUrl }) {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      
      {/* 컨테이너 */}
      <div className="max-w-7xl w-full p-6 rounded-2xl bg-black/80 backdrop-blur-md border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]">

        {/* 프로젝트 제목 */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-left mb-6 tracking-wide animate-fadeIn text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          {title}
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* 왼쪽 이미지 */}
          <motion.div
            className="w-[300px] md:w-[400px] h-[350px] md:h-[450px] bg-gray-800 border-2 border-white rounded-2xl shadow-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Image
              className="w-full h-full object-cover rounded-2xl"
              src={imageSrc}
              alt={`${title} Thumbnail`}
              width={400}
              height={450}
            />
          </motion.div>

          {/* 오른쪽 설명 영역 */}
          <div className="flex flex-col justify-center items-start md:ml-10 text-left w-full md:w-auto">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight animate-fadeIn delay-100 text-yellow-400">
              Project Description
            </h3>
            <p className="text-lg md:text-xl border-2 border-white rounded-xl p-4 mb-6 bg-white/10 backdrop-blur-sm shadow-inner animate-fadeIn delay-200">
              {description}
            </p>

            {/* 버튼 영역 */}
            <div className="flex flex-row gap-4 mt-2">
              
              {/* Visit Site */}
              <motion.a
                href={visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center bg-white text-black px-6 py-2 rounded-2xl text-2xl font-bold hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-white transition-all duration-300 shadow-lg min-w-[160px]"
                whileHover={{ scale: 1.1 }}
              >
                Visit Site 🔎
              </motion.a>

              {/* Back 버튼 */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <Link
                  href="/?noAnim=true#section2"
                  className="flex justify-center items-center bg-gray-200 text-black px-6 py-2 rounded-2xl text-2xl font-bold hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-lg min-w-[160px]"
                >
                  ⬅ Back
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
