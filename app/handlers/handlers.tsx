
import ships from "@/data/ships.json";


export function findShipById({id} : any) {
  const data =  ships.find((ship) => ship.id.toString() === id);
  return data;
}

export function getAllShips() {
  const allShips = ships
  return allShips
}