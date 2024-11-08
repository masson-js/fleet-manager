import SideNavigation from "../components/sideNavigation";
import { getShipsData } from "../handlers/handlers";

interface FixturesParams {
  demo?: any;
  user?: any;
}

export default async function Fixtures({
  searchParams,
}: {
  searchParams: FixturesParams;
}) {
  const params = await searchParams;
  const isDemo = params?.demo === "true";
  const isUser = params?.user;
  const shipsData = await getShipsData(isDemo, isUser);
  
  return (
    <div>
      <SideNavigation demo={isDemo} user={isUser}/>
      <p>Fixtures page</p>
    </div>
  )
}
