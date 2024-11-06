import ships from "@/data/ships.json";
import data from "@/data/ships.json"


export function findShipById(id: any) {
  console.log(id);
  const data = ships.find((ship) => ship.id.toString() === id);
  return data;
}
