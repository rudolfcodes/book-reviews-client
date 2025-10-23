"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Badge from "./Badge";

interface NavmenuProps {
  items: NavMenuItem[];
  className?: string;
}

interface NavMenuItem {
  label: string;
  href: string;
}

const NavMenu = ({ items, className }: NavmenuProps) => {
  const pathname = usePathname();
  const { user } = useCurrentUser();
  const clubCount = user?.clubsJoined.length || 0;

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className={className}>
      <ul className="flex menu-horizontal space-x-12 items-center">
        {items.map((item, index) => (
          <li
            key={index}
            className={`relative py-[27px] ${
              isActive(item.href) ? "border-b-2 border-error" : ""
            }`}
          >
            <a
              href={item.href}
              className={`text-black ${
                isActive(item.href) ? "semiBold-600" : ""
              }`}
            >
              {item.label}
            </a>
            {item.label === "My Clubs" && clubCount > 0 && (
              <Badge className="absolute top-3 -right-4 bg-error !px-2 !py-1 text-white">
                {clubCount}
              </Badge>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
