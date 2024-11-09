import { redirect } from "next/navigation";
import SideNavigation from "../components/sideNavigation";
import { getShipsData } from "../handlers/handlers";
interface StatusParams {
  demo?: any;
  user?: any;
}

export default async function Logbooks({
  searchParams,
}: {
  searchParams: StatusParams;
}) {
  const params = await searchParams;
  const isDemo = params?.demo === "true";
  const isUser = params?.user;
  const shipsData = await getShipsData(isDemo, isUser);
  console.log(isUser);

  if (!isDemo && isUser === undefined) redirect(`/error/nofoundpage`);
  return (
    <div>
      <SideNavigation demo={isDemo} user={isUser} />
      <p>Logbooks page</p>
    </div>
  );
}
