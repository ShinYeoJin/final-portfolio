"use client";

import React, { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  // 페이지 로드시 자동 재생
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5; // 기본 볼륨 50%
      audio.loop = true; // 반복 재생
      const playPromise = audio.play();

      // 브라우저 정책으로 인해 자동재생 실패할 수도 있으므로 에러 처리
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("자동 재생이 차단되었습니다:", error);
        });
      }
    }
  }, []);

  // 음소거 토글 함수
  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex items-center gap-3 bg-white/70 backdrop-blur-md shadow-lg px-4 py-2 rounded-full border border-gray-300">
      <button
        onClick={toggleMute}
        className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
      >
        {muted ? (
          <>
            🔇 <span className="text-sm">음소거 해제</span>
          </>
        ) : (
          <>
            🔊 <span className="text-sm">음소거</span>
          </>
        )}
      </button>

      {/* 오디오 엘리먼트 */}
      <audio ref={audioRef} src="../public/Shining lights, Jumpin’ through the sky .mp3" preload="auto" />
    </div>
  );
};

export default MusicPlayer;