import Link from "next/link";
import { LoginButton } from "./buttons";

export default function Header() {
  const buttonStyle = "hover:bg-slate-700 hover:border-slate-700 transition duration-500 ease-in-out text-base font-bold text-slate-600 px-10 py-2 border-2 rounded-lg border-gray-400 cursor-pointer";

  return (
    <header className="flex bg-slate-200 h-16 justify-end items-center">
      <nav className="mx-8">
        <LoginButton/>
      </nav>
    </header>
  );
}
