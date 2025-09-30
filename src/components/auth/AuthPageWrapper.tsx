import Logo from "@/components/Logo";
import React from "react";
import "../../app/globals.css";

interface AuthPageWrapperProps {
  illustration: {
    src: string;
    alt: string;
    title: string;
    subtitle?: string;
  };
  children: React.ReactNode;
}

export default function AuthPageWrapper({
  illustration,
  children,
}: AuthPageWrapperProps) {
  return (
    <div className="min-h-screen flex w-full">
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="max-w-md w-full p-8">
          <Logo imageSrc="/images/logo.png" alt="Swiss Book Club Logo" />
          {children}
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-[#63ABC3]">
        <div className="text-center text-white p-8">
          <h2 className="text-3xl font-bold mb-10">{illustration.title}</h2>
          <div className="md:w-xl md:h-xl mx-auto rounded-full flex items-center justify-center">
            <img
              src={illustration.src}
              alt={illustration.alt}
              className="w-full h-full object-contain"
            />
          </div>
          {illustration.subtitle && (
            <p className="mt-6 text-lg">{illustration.subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
