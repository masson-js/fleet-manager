import Link from "next/link";
import { LoginButton, RegistrationButton } from "./buttons";
import Registration from "../registration/page";

export default function Header() {
  

  return (
    <header className="flex bg-gray-200 h-16 justify-end items-center">
      <nav className="flex mx-8 gap-4">
        <LoginButton/>
        <RegistrationButton/>
      </nav>
    </header>
  );
}
