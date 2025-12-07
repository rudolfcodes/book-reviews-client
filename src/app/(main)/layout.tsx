import Navbar from "@/components/Navbar";
import InnerWrapper from "@/components/InnerWrapper";
import Link from "next/link";
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";
import UserProfileDropdown from "@/components/user/UserProfile";
import Footer from "@/components/Footer";

const navItems = [
  { label: "Explore", href: "/" },
  { label: "My Clubs", href: "/clubs" },
  { label: "Messages", href: "/messages" },
  { label: "Events", href: "/events" },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar>
        <InnerWrapper>
          <Link href="/">
            <Logo
              className="w-36"
              imageSrc="/images/logo.png"
              alt="Swiss Book Club Logo"
            />
          </Link>
          <NavMenu items={navItems} className="hidden lg:block" />
          <div className="hidden lg:block">
            <UserProfileDropdown />
          </div>
          {/* Hamburger menu for mobile */}
          <div className="lg:hidden">
            <button className="p-2">
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </button>
          </div>
        </InnerWrapper>
      </Navbar>
      {children}
      <Footer />
    </>
  );
}
