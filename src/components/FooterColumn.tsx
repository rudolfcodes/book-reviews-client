import { FooterColumnProps } from "@/types/footer/footer.types";
import React from "react";
import FlexContainer from "./FlexContainer";

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <FlexContainer className="flex flex-col gap-4">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      <ul className="flex flex-col gap-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:underline">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </FlexContainer>
  );
};

export default FooterColumn;
