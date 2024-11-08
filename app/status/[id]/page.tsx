import { findShipById } from "@/app/handlers/handlers";

interface ShipParams {
  params: {
    id: string;
  };
}

export default async function Ship({ params }: ShipParams) {
  const { id } =  await params
  const ship = findShipById(id);

  if (!ship) {
    return <h1>Ship not found</h1>;
  }

  const { name, type } = ship;

  return (
    <>
      <span>{id}</span>
      <h1>Ship: {name}</h1>
      <h1>Type: {type}</h1> {/* Исправлено на "Type" */}
    </>
  );
}