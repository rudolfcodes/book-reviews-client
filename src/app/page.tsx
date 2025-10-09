import Head from "next/head";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { DecodedToken } from "@/types/token";
import Footer from "@/components/Footer";
import ClubDiscoveryFeed from "@/components/ClubDiscoveryFeed";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";
import UserProfileDropdown from "@/components/user/UserProfile";
import InnerWrapper from "@/components/InnerWrapper";

const navItems = [
  { label: "Explore", href: "/" },
  { label: "My Clubs", href: "/clubs" },
  { label: "Messages", href: "/messages" },
  { label: "Events", href: "/events" },
];

export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  let userId = null;
  let decodedToken = null;

  if (token) {
    try {
      const decoded = jwt.verify(
        token,
        process.env.NEXT_PUBLIC_JWT_SECRET ?? ""
      ) as DecodedToken;
      userId = decoded.userId;
      decodedToken = decoded;
      console.log({ decoded });
    } catch (error) {
      console.log("something went wrong with verifying the token", error);
    }
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
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
          <Logo
            className="w-36"
            imageSrc="/images/logo.png"
            alt="Swiss Book Club Logo"
          />
          <NavMenu items={navItems} />
          <UserProfileDropdown />
        </InnerWrapper>
      </Navbar>
      <Hero />
      <ClubDiscoveryFeed />
      <Footer />
    </div>
  );
}
