
import HomeNavigation from "./components/homeNavigation";
import HomeInfo from "./components/info/homeInfo";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen">
      <div className="flex flex-row w-full">
        <HomeInfo />
        <HomeNavigation />
      </div>
    </main>
  );
}
