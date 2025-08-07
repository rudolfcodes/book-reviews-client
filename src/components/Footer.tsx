import React from "react";

const Footer = () => {
  return (
    <div className="h-32 bg-blue-cream flex justify-center items-center text-base text-white">
      <span className="font-light">
        © {new Date().getFullYear()} Bookclub{" "}
        <span className="font-semibold">CH</span>
      </span>
    </div>
  );
};

export default Footer;
