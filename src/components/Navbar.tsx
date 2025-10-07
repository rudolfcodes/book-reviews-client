import React from "react";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white h-20">
      {children}
    </header>
  );
};

export default Navbar;
