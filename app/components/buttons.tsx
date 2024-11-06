"use client";

import Link from "next/link";




const buttonStyle =
  "w-24 h-12 border-2 rounded-lg font-bold text-center text-gray-800 border-gray-400 hover:bg-gray-500 hover:border-gray-500 hover:text-gray-100 transition duration-100 hover:duration-500 ease-in-out ";

export function LoginButton() {
  return (
    <Link href="/login">
      <button className={buttonStyle}>Log in</button>
    </Link>
  );
}

export function RegistrationButton() {
  return (
    <Link href="/registration">
      <button className={buttonStyle}>Sign up</button>
    </Link>
  );
}

export function TryDemoButton() {
  return (
    <Link href="/status?demo=true">
      <button className={buttonStyle}>
        Try Demo
      </button>
    </Link>
  );
}

export function TryUserButton() {
  return (
    <Link href="/status?user=12312">
      <button className={buttonStyle}>
        Try User
      </button>
    </Link>
  );
}
