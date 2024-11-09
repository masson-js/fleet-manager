"use client";

import { useRouter } from "next/navigation";

export default function ShipButton({ id, children, demo, user }) {
  const router = useRouter();
  console.log(user)
  function handleClick() {
    if (demo) router.push(`/status/${id}?demo=${demo}`);
    else if (user) router.push(`/status/${id}?user=${user}`);
  }
  return (
    <button style={{ cursor: "pointer" }} onClick={handleClick}>
      {children}
    </button>
  );
}
