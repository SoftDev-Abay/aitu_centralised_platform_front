"use client";

import { sidebarLinks } from "@/app/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function Bottombar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          // const isActive =
          //   (pathname.includes(link.route) && link.route.length > 1) ||
          //   pathname === link.route;

          const isActive =
            (pathname &&
              pathname.includes(link.route) &&
              link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              className={`bottombar_link ${isActive && "bg-primary-500"}`}
              href={link.route}
              key={link.label}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              ></Image>
              <p className="text-light-1 text-subtle-medium max-sm:hidden">
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;
