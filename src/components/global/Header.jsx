"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
      const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 transition-colors duration-300 backdrop-blur">
        <div className="flex items-center justify-between py-4 px-8">
        <ul>
          <li>
            <Link href="/">
            <Image
            src={"/logo/logo.png"}
            alt={"logo"}
            width={80}
            height={80}
            />
            </Link>
          </li>
    </ul>
          <ul className="flex gap-10">
      {[
        { href: "/om", label: "om" },
        { href: "/optag", label: "optag" },
        { href: "/elever", label: "elever" },
        { href: "/film", label: "udgivede film" },
        { href: "/undervisere", label: "undervisere" },
      ].map(({ href, label }) => (
        <li className="uppercase" key={href}>
          <Link
            href={href}
            className={`px-8 py-2 rounded-4xl hover:bg-(--yellow) hover:text-(--background) hover:rounded-4xl transition-all duration-300 ${
              pathname === href
                ? "text-(--background) bg-(--yellow)"
                : "text-(--foreground)"
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
    </div>
    </nav>
  );
};

export default Header;
