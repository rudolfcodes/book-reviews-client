import Header from "@/components/Header";
import Head from "next/head";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { DecodedToken } from "@/types/token";
import Footer from "@/components/Footer";
import ClubDiscoveryFeed from "@/components/ClubDiscoveryFeed";
import Hero from "@/components/Hero";

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
    } catch (error) {
      console.log("something went wrong with verifying the token", error);
    }
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Head>
        <title>
          Bookclub CH - Find your club and share your love for books
        </title>
        <meta
          name="description"
          content="Join a community of book lovers and share your thoughts!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <ClubDiscoveryFeed />
      <Footer />
    </div>
  );
}
