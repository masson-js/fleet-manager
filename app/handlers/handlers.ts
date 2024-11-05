import ships from "@/data/ships.json";

export function findShipById(id: any) {
  console.log(id);
  const data = ships.find((ship) => ship.id.toString() === id);
  return data;
}

export function tryDemoVersion(isDemo: boolean) {
  return isDemo === true;
}

export function getAllShips() {
  let demoShips;

  if (tryDemoVersion(true)) {
    demoShips = ships;
    console.log(demoShips);
  }

  return demoShips;
}
