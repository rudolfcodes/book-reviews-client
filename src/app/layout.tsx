import UserProvider from "@/context/UserProvider";
import "./globals.css";
import { Inter, Roboto_Slab } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Swiss Book Club - Discover and Join Book Clubs",
  description: "Join a community of book lovers across Switzerland!",
};

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
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} ${roboto.variable}`}>
        <div className="flex flex-1">
          <UserProvider>{children}</UserProvider>
        </div>
      </body>
    </html>
  );
}
