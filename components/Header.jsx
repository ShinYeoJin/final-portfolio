'use client';

export default function Header({ setRocketDone }) {
  return (
    <header className="w-full flex justify-between items-center p-4 absolute top-0 left-0 z-20">
      <button
        onClick={() => setRocketDone(false)}
        className="hover:scale-105 transition-transform text-white font-bold px-3 py-1 rounded"
      >
        BE LIKE A STAR⭐
      </button>
      <nav className="flex gap-4 text-white">
        <a href="#section1" className="hover:font-bold">Main</a>
        <a href="#section2" className="hover:font-bold">Projects</a>
        <a href="#section3" className="hover:font-bold">Introduce</a>
      </nav>
    </header>
  );
}