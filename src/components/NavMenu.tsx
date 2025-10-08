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
  return (
    <nav className={className}>
      <ul className="flex space-x-12">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="text-gray-700 hover:text-blue-500">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
