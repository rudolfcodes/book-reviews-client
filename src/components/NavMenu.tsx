"use client";

import React from "react";

interface NavmenuProps {
  items: NavMenuItem[];
  className?: string;
}

interface NavMenuItem {
  label: string;
  href: string;
}

const NavMenu = ({ items, className }: NavmenuProps) => {
  const isActive = (href: string) => {
    return window.location.pathname === href;
  };

  return (
    <nav className={className}>
      <ul className="flex menu-horizontal space-x-12 items-center">
        {items.map((item, index) => (
          <li
            key={index}
            className={`py-[27px] ${
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
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
