import Logo from "@/components/Logo";
import React from "react";

interface AuthLayoutProps {
  illustration: {
    src: string;
    alt: string;
    title: string;
    subtitle?: string;
  };
  children: React.ReactNode;
}

export default function AuthLayout({
  children,
  illustration,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/2 flex items-center">
        <div className="max-w-md w-full p-8">
          <Logo imageSrc="/logo.png" alt="Logo" />
          {children}
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-blue-cream">
        <div className="max-w-md w-full p-8"></div>
        <div className="text-center text-white p-8">
          <h2 className="text-3xl font-bold mb-10">{illustration.title}</h2>
          <img
            src={illustration.src}
            alt={illustration.alt}
            className="mx-auto rounded-full border-2 border-[#C7E4FF]"
          />
          {illustration.subtitle && (
            <p className="mt-4">{illustration.title}</p>
          )}
        </div>
      </div>
    </div>
  );
}
