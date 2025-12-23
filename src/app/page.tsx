import Head from "next/head";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";
import UserProfileDropdown from "@/components/user/UserProfile";
import InnerWrapper from "@/components/InnerWrapper";
import ListPopularClubs from "@/components/ListPopularClubs";
import ListEvents from "@/components/ListEvents";
import CTABanner from "@/components/CTABanner";
import discoveryCTA from "@/data/discoveryCTA";
import ChatTeaser from "@/components/ChatTeaser";
import HowItWorks from "@/components/HowItWorks";
import Link from "next/link";
import FlexContainer from "@/components/FlexContainer";

const navItems = [
  { label: "Explore", href: "/" },
  { label: "My Clubs", href: "/clubs" },
  { label: "Messages", href: "/messages" },
  { label: "Events", href: "/events" },
];

export default async function Home() {
  return (
    <FlexContainer className="flex-col min-h-screen w-full">
      <Head>
        <title>
          Swiss BookClub - Find your club and share your love for books
        </title>
        <meta
          name="description"
          content="Join a community of book lovers and share your thoughts!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <Hero />

      <ListPopularClubs />
      <ListEvents />
      <CTABanner {...discoveryCTA} icon={<discoveryCTA.icon />} />
      <ChatTeaser />
      <HowItWorks />
      <Footer />
    </FlexContainer>
  );
}
