"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url && "bg-gray-500 text-white"
      }`}
      href={link.url}
    >
      <span className="font-extrabold text-lg">{link.title}</span>
    </Link>
  );
};

export default NavLink;
