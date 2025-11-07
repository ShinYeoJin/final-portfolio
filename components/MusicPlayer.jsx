"use client";

import React, { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 저장된 상태 불러오기
    const savedTime = localStorage.getItem("music-current-time");
    const savedMuted = localStorage.getItem("music-muted") === "true";
    const savedAllowed = localStorage.getItem("music-allowed") === "true";

    if (savedTime) audio.currentTime = parseFloat(savedTime);
    audio.muted = savedMuted;
    setMuted(savedMuted);
    setIsAllowed(savedAllowed);

    audio.volume = 0.2;
    audio.loop = true;

    // 사용자가 이전에 재생을 허용한 경우 자동 재생 시도
    if (savedAllowed) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => console.log("자동 재생 차단:", err));
      }
    }

    // 재생 위치 저장
    const interval = setInterval(() => {
      if (!audio.paused) {
        localStorage.setItem("music-current-time", audio.currentTime.toString());
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      if (audio) {
        localStorage.setItem("music-current-time", audio.currentTime.toString());
      }
    };
  }, []);

  // 음소거 토글
  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !muted;
    setMuted(!muted);
    localStorage.setItem("music-muted", (!muted).toString());
  };

  // 음악 재생 허용 (최초 1회만 클릭 필요)
  const handleAllowMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          localStorage.setItem("music-allowed", "true");
          setIsAllowed(true);
        })
        .catch((err) => console.log("음악 재생 실패:", err));
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex items-center gap-3 bg-white/70 backdrop-blur-md shadow-lg px-4 py-2 rounded-full border border-gray-300">
      {/* 최초 허용 버튼 (1회만 표시) */}
      {!isAllowed && (
        <button
          onClick={handleAllowMusic}
          className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full shadow hover:bg-blue-600 transition"
        >
          🎵 음악 재생 허용
        </button>
      )}

      {/* 음소거 버튼 */}
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

      <audio ref={audioRef} src="song.mp3" preload="auto" />
    </div>
  );
};

export default MusicPlayer;