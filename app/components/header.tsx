import Link from "next/link";

export default function Header() {
  return (
    <header className="flex bg-slate-200 h-8 justify-end ">
      <nav className="mx-8 content-center">
        <ul>
          <li className="text-base font-bold text-slate-600">
            <Link href="/login">Log In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
