import Header from "../components/header";
import ShipButton from "../components/shipButton";
import SideNavigation from "../components/sideNavigation";

import {
  durationCalc,
  getInspectionIcon,
  getStatusColorClass,
} from "../helpers/helpers";
import { getShipsData } from "../handlers/handlers";


interface StatusParams {
  demo?: string;
  user?: string;
}



export default async function Status({
  searchParams,
}: {
  searchParams: StatusParams;
}) {
  const params = await searchParams;
  const isDemo = params?.demo === "true";
  const isUser = params?.user;
  const shipsData = await getShipsData(isDemo, isUser);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex w-auto h-auto m-6 flex-row">
        <SideNavigation />
        <div className="flex m-6 w-auto h-auto ">
          <table className="table-auto w-full rounded-lg overflow-hidden border border-gray-300">
            <thead className="">
              <tr className="items-center ">
                <th className="px-4 py-2 bg-gray-300 text-center rounded-tl-lg">
                  Name
                </th>
                <th className="px-4 py-2 bg-gray-300 text-center">Type</th>
                <th className="px-4 py-2 bg-gray-300 text-center">IMO</th>
                <th className="px-4 py-2 bg-gray-300 text-center">d.w.</th>
                <th className="px-4 py-2 bg-gray-300 text-center">year</th>
                <th className="px-4 py-2 bg-gray-300 text-center">status</th>
                <th className="px-4 py-2 bg-gray-300 text-center">reg-port</th>
                <th className="px-4 py-2 bg-gray-300 text-center">eco</th>
                <th className="px-4 py-2 bg-gray-300 text-center">
                  duration in ml
                </th>
                <th className="px-4 py-2 bg-gray-300 text-center rounded-tr-lg">
                  ins. passed
                </th>
              </tr>
            </thead>
            <tbody className="items-center">
              {shipsData.map((ship: any) => (
                <tr className="px-4 py-2 text-center" key={ship.id}>
                  <td className="px-4 py-2 align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>{ship.name}</ShipButton>
                  </td>
                  <td className="px-4 py-2 align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>{ship.type}</ShipButton>
                  </td>
                  <td className="px-4 py-2 align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>{ship.imoNumber}</ShipButton>
                  </td>
                  <td className="px-4 py-2 align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>{ship.deadweight}</ShipButton>
                  </td>
                  <td className="px-4 py-2 align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>{ship.yearBuilt}</ShipButton>
                  </td>
                  <td
                    className={`px-6 py-3 align-middle hover:bg-slate-600 hover:text-white ${getStatusColorClass(
                      ship.currentStatus
                    )}`}
                  >
                    <ShipButton id={ship.id}>{ship.currentStatus}</ShipButton>
                  </td>
                  <td className="px-4 py-2 align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>{ship.portOfRegistry}</ShipButton>
                  </td>
                  <td className="px-4 py-2 align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>{ship.ecoStandard}</ShipButton>
                  </td>
                  <td className="px-4 py-2 align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>
                      {durationCalc(ship.routes)}
                    </ShipButton>
                  </td>
                  <td className="px-4 py-2 align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>
                      <img
                        src={getInspectionIcon(ship.inspections)}
                        alt="Inspection Status"
                        className="w-6 h-6"
                      />
                    </ShipButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
