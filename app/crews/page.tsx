import { redirect } from "next/navigation";
import SideNavigation from "../components/sideNavigation";
import { getShipsData } from "../handlers/handlers";
interface FixturesParams {
  demo?: any;
  user?: any;
}
export default async function Crews({
  searchParams,
}: {
  searchParams: FixturesParams;
}) {
  const params = await searchParams;
  const isDemo = params?.demo === "true";
  const isUser = params?.user;
  const shipsData = await getShipsData(isDemo, isUser);

  if (!isDemo && isUser === undefined) redirect(`/error/nofoundpage`)
  return (
    <div>
      <SideNavigation demo={isDemo} user={isUser} />
      <div>Crews Page</div>
    </div>
  );
}
