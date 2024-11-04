import Header from "../components/header";
import Ship from "../components/ship";
import SideNavigation from "../components/sideNavigation";
import { getAllShips } from "../handlers/handlers";

export default function Status() {
  const allShips = getAllShips();

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row gap-7">
        <SideNavigation />
        <div>
          {allShips.map((ship: any) => (
            <Ship key={ship.id} name={ship.name} id={ship.id.toString()}></Ship>
          ))}
        </div>
      </div>
    </div>
  );
}
