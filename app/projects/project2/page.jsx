import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <section className="w-full h-screen flex flex-col justify-start items-center bg-black text-white">
      <div className="max-w-7xl h-[600px] mt-[200px] border-2 border-white rounded-lg p-4">
        <h2 className="text-5xl text-left">HTML & CSS & Js</h2>

        <div className="flex flex-row justify-between mt-8">
          {/* 왼쪽 이미지 영역 */}
          <div className="w-[400px] h-[450px] bg-gray-800 border-2 border-white rounded-lg">
            <Image
              className="w-full h-full object-contain rounded-lg"
              src="/2.PNG" // 이미지 경로 수정 필요
              alt="Project Thumbnail"
              width={400}
              height={450}
            />
          </div>

          {/* 오른쪽 설명 영역 */}
          <div className="flex flex-col justify-center items-start ml-10">
            <h3 className="text-3xl mb-4">Project Description</h3>
            <span className="text-xl border-2 border-white rounded-lg p-4 mb-6">
              HTML+CSS+JS+에니메이션 활용하여 홈페이지 제작
            </span>

            {/* 버튼들을 flex-row로 배치 */}
            <div className="flex flex-row gap-4">
              {/* 외부 링크: Visit Site */}
              <a
                href="https://shinyeojin.github.io/Fashion/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 rounded-2xl text-2xl hover:bg-gray-200 transition"
              >
                Visit Site
              </a>

              {/* 내부 링크: Home */}
              <Link
                href="/?noAnim=true" // noAnim=true로 애니메이션 생략
                className="bg-white text-black px-6 py-2 rounded-2xl text-2xl hover:bg-gray-200 transition"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}