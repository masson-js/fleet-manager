import Ship from "../components/ship";


export default function Ships() {


  const ships = [
    { id: 1, name: "Astra", year: "2004", type: "tanker" },
    { id: 2, name: "Betta", year: "2004", type: "bulker" },
    { id: 3, name: "Proxima", year: "2001", type: "container" },
  ];
  return (
    <div>
      {ships.map((ship) => (
        <Ship key={ship.id} name={ship.name} id={ship.id.toString()}>
        </Ship>
      ))}
    </div>
  );
}
