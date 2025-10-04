import Logo from "@/components/Logo";
import React from "react";
import "../../app/globals.css";

interface AuthPageWrapperProps {
  illustration: {
    src: string;
    alt: string;
    title: string;
  };
  children: React.ReactNode;
}

export default function AuthPageWrapper({
  illustration,
  children,
}: AuthPageWrapperProps) {
  return (
    <div className="min-h-screen flex w-full">
      <div className="absolute lg:hidden w-full h-full flex items-center justify-center z-1">
        <img
          src="/images/mobile-register.png"
          alt=""
          className="absolute min-h-[220px] inset-0 object-cover object-center left-1/2 transform -translate-x-1/2 w-screen md:-translate-y-[20%]"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center z-10">
        <div className="max-w-md w-full p-8">
          <Logo imageSrc="/images/logo.png" alt="Swiss Book Club Logo" />
        </div>

        <div className="flex-1 flex justify-center">
          <div className="max-w-md w-full px-8">{children}</div>
        </div>
      </div>

      <div className="hidden lg:visible w-1/2 lg:flex items-center justify-center bg-[#63ABC3]">
        <div className="text-center text-white p-8">
          <h2 className="illustration-text mb-10">{illustration.title}</h2>
          <div className="md:w-xl md:h-xl mx-auto rounded-full flex items-center justify-center">
            <img
              src={illustration.src}
              alt={illustration.alt}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
