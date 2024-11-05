import Header from "../components/header";

import ShipButton from "../components/shipButton";
import SideNavigation from "../components/sideNavigation";
import { getAllShips } from "../handlers/handlers";

export default async function Status() {
  const allShips = getAllShips() || [];

  function durationCalc(routes: any) {
    if (!routes || routes.length === 0) {
      return 0;
    }

    const totalDuration = routes.reduce((total: any, route: any) => {
      return total + (route.duration || 0);
    }, 0);

    return totalDuration;
  }

  function getInspectionIcon(inspections: any) {
    if (inspections && inspections.length > 0) {
      const lastInspection = inspections[inspections.length - 1];
      return lastInspection.result === "Passed" ? "/passed.png" : "/soon.png";
    }
    return "/soon.png";
  }

  function getStatusColorClass(status: any) {
    switch (status) {
      case "On the Way":
        return "bg-green-500 text-white";
      case "In Port":
        return "bg-blue-500 text-white";
      case "In Service":
        return "bg-yellow-500 text-white";
      case "Delayed":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-300";
    }
  }

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex w-auto h-auto m-6 flex-row">
        <SideNavigation />
        <div className="flex bg-gray-200 m-6 w-auto h-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="items-center">
                <th className="px-4 py-2 bg-gray-300 text-center">Name</th>
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
                <th className="px-4 py-2 bg-gray-300 text-center">
                  ins. passed
                </th>
              </tr>
            </thead>
            <tbody className="items-center">
              {allShips.map((ship) => (
                <tr className="px-4 py-2 text-center" key={ship.id}>
                  <td className="px-4 py-2  align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>{ship.name}</ShipButton>
                  </td>

                  <td className="px-4 py-2  align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>{ship.type}</ShipButton>
                  </td>
                  <td className="px-4 py-2  align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>{ship.imoNumber}</ShipButton>
                  </td>
                  <td className="px-4 py-2  align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>{ship.deadweight}</ShipButton>
                  </td>
                  <td className="px-4 py-2  align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>{ship.yearBuilt}</ShipButton>
                  </td>
                  <td
                    className={`px-6 py-3 align-middle hover:bg-slate-600 hover:text-white ${getStatusColorClass(
                      ship.currentStatus
                    )}`}
                  >
                    <ShipButton id={ship.id}>{ship.currentStatus}</ShipButton>
                  </td>
                  <td className="px-4 py-2  align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>{ship.portOfRegistry}</ShipButton>
                  </td>
                  <td className="px-4 py-2  align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>{ship.ecoStandard}</ShipButton>
                  </td>
                  <td className="px-4 py-2  align-middle hover:bg-slate-600 hover:text-white">
                    <ShipButton id={ship.id}>
                      {durationCalc(ship.routes)}
                    </ShipButton>
                  </td>
                  <td className="px-4 py-2  align-middle hover:bg-slate-600 hover:text-white">
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
