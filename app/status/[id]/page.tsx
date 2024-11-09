import { findShipById } from "@/app/handlers/handlers";
import { redirect } from "next/navigation";

interface ShipParams {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export default async function Ship({ params, searchParams }: ShipParams) {
  const { id } = await params;
  const { demo, user } = await searchParams;
  const ship = findShipById(id);

  if (!ship) {
    return <h1>Ship not found</h1>;
  }

  if (!demo && !user) {
    redirect(`/error/nofoundpage`);
  }

  const { name, type } = ship;

  return (
    <>
      <span>{id}</span>
      <h1>Ship: {name}</h1>
      <h1>Type: {type}</h1>
      {demo && <p>Demo mode is active!</p>}
      {user && <p>User ID: {user}</p>}
    </>
  );
}
