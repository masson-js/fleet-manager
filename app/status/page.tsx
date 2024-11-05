import Header from "../components/header";
import Ship from "../components/ship";
import SideNavigation from "../components/sideNavigation";
import { getAllShips } from "../handlers/handlers";

export default async function Status() {
  const allShips = (await getAllShips()) || []; // Значение по умолчанию — пустой массив

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row gap-7">
        <SideNavigation />
        <div>
          {allShips.map((ship) => (
            <Ship key={ship.id} name={ship.name} id={ship.id.toString()} />
          ))}
        </div>
      </div>
    </div>
  );
}