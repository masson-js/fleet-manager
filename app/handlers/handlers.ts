import ships from "@/data/ships.json";
import demoData from "@/data/ships.json";
const userData: any = [];

export function findShipById(id: any) {
  console.log(id);
  const data = ships.find((ship) => ship.id.toString() === id);
  return data;
}

export async function getShipsData(isDemo: boolean, user?: string) {
  return isDemo ? demoData : userData;
}
