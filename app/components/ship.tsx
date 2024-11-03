import ShipButton from './shipButton'

interface ShipTypes {
  name: string;
  id: string;
}

export default function Ship({ name, id }: ShipTypes) {
  return (
    <div>
      <p>{name}</p>
      <p>{id}</p>
      <ShipButton id={id}/>
    </div>
  );
}
