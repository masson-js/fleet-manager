import Image from "next/image";
import Link from "next/link";

interface PropsParams {
  demo: any;
  user: any;
}

export default function SideNavigation({ demo, user }: PropsParams) {
  function propsStateSwitch() {
    let url = "";

    if (demo) {
      url += "?demo=true";
    } else if (user) {
      if (url) {
        url += `&user=${user}`;
      } else {
        url += `?user=${user}`;
      }
    }
    return url;
  }
  const buttonStyle = "flex m-2 px-2 justify-start hover:underline";
  return (
    <section className="flex">
      <ul className="flex flex-col justify-start mt-6">
        <li className={buttonStyle}>
          <Link href={`/status${propsStateSwitch()}`} className="flex flex-row">
            <Image
              src="/status.png"
              alt="Status Icon"
              className="w-6 h-6 mr-2"
              width={24}
              height={24}
            />
            Status
          </Link>
        </li>
        <li className={buttonStyle}>
          <Link
            href={`/fleetonmap${propsStateSwitch()}`}
            className="flex flex-row"
          >
            <Image
              src="/map.png"
              alt="Map Icon"
              className="w-6 h-6 mr-2"
              width={24}
              height={24}
            />
            Fleet on Map
          </Link>
        </li>
        <li className={buttonStyle}>
          <Link href={`/inspections${propsStateSwitch()}`} className="flex flex-row">
            <Image
              src="/document.png"
              alt="Inspection Icon"
              className="w-6 h-6 mr-2"
              width={24}
              height={24}
            />
            Inspections
          </Link>
        </li>
        <li className={buttonStyle}>
          <Link href={`/logbooks${propsStateSwitch()}`} className="flex flex-row">
            <Image
              src="/logbook.png"
              alt="Logbook Icon"
              className="w-6 h-6 mr-2"
              width={24}
              height={24}
            />
            Logbooks
          </Link>
        </li>
        <li className={buttonStyle}>
          <Link
            href={`/fixtures${propsStateSwitch()}`}
            className="flex flex-row"
          >
            <Image
              src="/hands.png"
              alt="fixtures Icon"
              className="w-6 h-6 mr-2"
              width={24}
              height={24}
            />
            Fixtures
          </Link>
        </li>
        <li className={buttonStyle}>
          <Link href={`/crews${propsStateSwitch()}`} className="flex flex-row">
            <Image
              src="/crews.png"
              alt="crews Icon"
              className="w-6 h-6 mr-2"
              width={24}
              height={24}
            />
            Crews
          </Link>
        </li>
      </ul>
    </section>
  );
}
