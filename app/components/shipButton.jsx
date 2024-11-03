"use client";

import { useRouter } from "next/navigation";

export default function ShipButton({ id }) {
  const router = useRouter();
  function handleClick() {
    router.push(`/ships/${id}`);
  }
  return (
    <button style={{ cursor: "pointer" }} onClick={handleClick}>
      Go to Ship
    </button>
  );
}
