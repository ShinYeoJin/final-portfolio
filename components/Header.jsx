import Link from "next/link";

export default function Header() {
  
  return (
    <>
      <header className="w-full container mx-auto flex flex-row justify-between items-center p-2 bg-transparent ">
        <span>BE LIKE A STAR⭐</span>
        <Link href={"../components/Section1.jsx"}>Main</Link>
        <Link href={"../components/Section2.jsx"}>Projects</Link>
        <Link href={"../components/Section3.jsx"}>Introduce</Link>
      </header>
    </>);
}