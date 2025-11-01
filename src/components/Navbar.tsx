import React from "react";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <header className="flex justify-between items-center sticky top-0 p-4 bg-white h-20 z-20">
      {children}
    </header>
  );
};

export default Navbar;
