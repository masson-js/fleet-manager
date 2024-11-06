export function durationCalc(routes: any) {
  if (!routes || routes.length === 0) {
    return 0;
  }

  const totalDuration = routes.reduce((total: any, route: any) => {
    return total + (route.duration || 0);
  }, 0);

  return totalDuration;
}

export function getInspectionIcon(inspections: any) {
  if (inspections && inspections.length > 0) {
    const lastInspection = inspections[inspections.length - 1];
    return lastInspection.result === "Passed" ? "/passed.png" : "/soon.png";
  }
  return "/soon.png";
}

export function getStatusColorClass(status: any) {
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