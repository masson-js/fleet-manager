import Link from "next/link";

export default function SideNavigation() {
  return (
    <section className="flex">
      <ul className="flex flex-col">
        <li>
          <Link href="/status">Status</Link>
        </li>
        <li>
          <Link href="/fleetonmap">Fleet on Map</Link>
        </li>
        <li>
          <Link href="/inspections">Inspections</Link>
        </li>
        <li>
          <Link href="/logbooks">Logbooks</Link>
        </li>
        <li>
          <Link href="/fixtures">Fixtures</Link>
        </li>
        <li>
          <Link href="/crews">Crews</Link>
        </li>
      </ul>
    </section>
  );
}
