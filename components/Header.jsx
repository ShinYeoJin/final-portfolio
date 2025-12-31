'use client';
import MusicPlayer from './MusicPlayer';

export default function Header({ setRocketDone }) {
  return (
    <header className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 p-2 sm:p-4 absolute top-0 left-0 z-20">
      <button
        onClick={() => setRocketDone(false)}
        className="hover:scale-105 transition-transform text-white font-bold text-xs sm:text-base px-2 sm:px-3 py-1 rounded"
      >
        BE LIKE A STAR⭐
      </button>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <nav className="flex flex-wrap gap-2 sm:gap-4 text-white text-xs sm:text-base">
          <a href="#section1" className="hover:font-bold">Main</a>
          <a href="#section2" className="hover:font-bold">Projects</a>
          <a href="#section3" className="hover:font-bold">Introduce</a>
        </nav>
        <MusicPlayer />
      </div>
    </header>
  );
}