import React from "react";
import TextContainer from "./TextContainer";
import FlexContainer from "./FlexContainer";
import EmailIcon from "./icons/EmailIcon";
import PhoneIcon from "./icons/PhoneIcon";
import { bottomFooterLinks, footerColumns } from "@/data/footerColumns";
import FooterColumn from "./FooterColumn";
import Link from "next/link";
import CopyrightIcon from "./icons/CopyrightIcon";
import NextImage from "./Image";
import RedditIcon from "./icons/RedditIcon";
import FacebookIcon from "./icons/FacebookIcon";
import YoutubeIcon from "./icons/YoutubeIcon";

const Footer = () => {
  return (
    <div className="bg-blue-cream text-center flex-col justify-center items-center text-base font-inter font-light text-white md:text-left lg:items-start pt-20 pb-10 px-5 lg:px-24">
      <FlexContainer className="flex-col md:flex-row gap-28 items-center md:items-start">
        <FlexContainer className="column flex-col justify-center items-center gap-4 max-w-64 text-center md:text-left md:justify-start md:items-start">
          <NextImage
            width={216}
            height={65}
            quality={100}
            src="/images/swiss_book_club_logo_white 1.png"
            alt="SWISS Bookclub"
            className="h-auto object-cover max-w-[216px]"
          />
          <TextContainer text="Find and host book clubs across Switzerland." />
          <FlexContainer className="gap-3.5 items-center">
            <EmailIcon />
            <TextContainer text="info@swissbookclub.ch" />
          </FlexContainer>

          <FlexContainer className="gap-3.5 items-center">
            <PhoneIcon />
            <TextContainer text="+41 78 346 24 55" />
          </FlexContainer>
        </FlexContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[60px]">
          {footerColumns.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
      </FlexContainer>
      <div className="border-t w-full border-white mt-20 mb-7" />

      <FlexContainer className="w-full justify-start items-center flex-col gap-2 lg:flex-row md:items-start lg:justify-between">
        <FlexContainer className="gap-2 items-center">
          <CopyrightIcon />
          <span>{new Date().getFullYear()}</span>
          <TextContainer text="SWISS Bookclub - All rights reserved." />
        </FlexContainer>
        {bottomFooterLinks.length > 0 && (
          <FlexContainer className="gap-7">
            {bottomFooterLinks.map((link, index) => (
              <Link key={index} href={link.href} className="hover:underline">
                {link.text}
              </Link>
            ))}
          </FlexContainer>
        )}

        <FlexContainer className="gap-4 items-center">
          <Link
            href="https://www.reddit.com/r/swissbookclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <RedditIcon />
          </Link>
          <Link
            href="https://www.facebook.com/swissbookclub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://www.youtube.com/swissbookclub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <YoutubeIcon />
          </Link>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
};

export default Footer;
