import UserProvider from "@/context/UserProvider";
import "./globals.css";
import { Inter, Roboto_Slab, Open_Sans } from "next/font/google";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import InnerWrapper from "@/components/InnerWrapper";
import Link from "next/link";
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";
import UserProfileDropdown from "@/components/user/UserProfile";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  weight: ["400", "500", "600", "700"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
});
const plusJakarta = Open_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Swiss Book Club - Discover and Join Book Clubs",
  description: "Join a community of book lovers across Switzerland!",
};

const navItems = [
  { label: "Explore", href: "/" },
  { label: "My Clubs", href: "/clubs" },
  { label: "Messages", href: "/messages" },
  { label: "Events", href: "/events" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body
        className={`${inter.className} ${roboto.variable} ${openSans.variable} ${plusJakarta.variable}`}
      >
        <Providers>
          <UserProvider>{children}</UserProvider>
        </Providers>
      </body>
    </html>
  );
}
