import Link from "next/link";
import { TryDemoButton } from "./buttons";

export default function NoFoundPageNavigation() {
  return (
    <div className="flex flex-col relative  w-full h-screen items-center justify-center bg-gray-100 text-gray-800">
      <div className="z-10 bg-white p-8 rounded-lg  text-gray-700 flex flex-col items-center gap-6 w-80 max-w-full">
        <h2 className="text-2xl font-semibold text-gray-800">
          Sorry, but for visiting this page you have to
        </h2>
      </div>
      <div className="z-10 bg-white px-8 pb-8 rounded-lg text-gray-700 flex flex-col items-center gap-6 w-80 max-w-full">
        <Link href="/registration" className="flex w-full">
          <button className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-black transition duration-150">
            Sign Up
          </button>
        </Link>
        <Link href="/login" className="flex w-full">
          <button className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-black transition duration-150">
            Log In
          </button>
        </Link>

        <button className="w-full mx-14 bg-gray-500 text-white py-2 rounded-md hover:bg-black transition duration-150">
          <Link href="/status?demo=true">Try Demo Version</Link>
        </button>
        <h2 className="text-black">or</h2>
        <button className="w-full mx-14 bg-gray-400 text-white py-2 rounded-md hover:bg-black transition duration-150">
          <Link href="/">Go to Home Page</Link>
        </button>
      </div>
    </div>
  );
}
