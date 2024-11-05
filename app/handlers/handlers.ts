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
  let userShips

  if (tryDemoVersion(true)) {
    return demoShips = ships
  }

  return userShips;
}
