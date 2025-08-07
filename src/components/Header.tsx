"use client";

import React from "react";
import Link from "next/link";
import useUser from "@/hooks/useUser";

const Header = () => {
  // Header should have: logo, current user avatar on the right, and links to sign up and login if no user is logged in
  // If user is logged in, show a dropdown with profile settings and logout option
  const { user, logout } = useUser();

  return (
    <header className="w-full h-20 bg-blue-cream sticky top-0 z-50">
      <div>
        <Link href="/" className="text-3xl font-bold text-white ml-8">
          Bookclub CH
        </Link>
      </div>
      <div className="container mx-auto h-full max-w-desktop flex justify-between items-center font-raleway">
        {!user ? (
          <div>
            <Link
              className="w-44 text-2xl btn rounded-3xl bg-blue-cream border-none text-white hover:bg-white hover:text-modern-primary mr-8"
              href="/auth/register"
            >
              sign up
            </Link>
            <Link
              className="w-44 text-2xl btn rounded-3xl bg-modern-secondary border-none text-modern-primary hover:bg-modern-primary hover:text-white"
              href="/auth/login"
            >
              login
            </Link>
          </div>
        ) : (
          <div className="flex text-xl text-white gap-9">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar placeholder">
                <div className="bg-modern-accent w-11 rounded-full">
                  <span>{user.username.charAt(0).toUpperCase()}</span>
                </div>
              </div>
              <ul className="dropdown-content menu min-w-[180px] bg-white font-semibold text-base text-blue-cream rounded-box rounded-bl-none rounded-br-none w-fit border-2 p-0 mt-1 border-blue-cream">
                <li className="text-blue-cream hover:text-white rounded-none">
                  <a
                    className="dropdown-item pl-4 hover:bg-blue-cream rounded-bl-none rounded-br-none focus:bg-transparent active:bg-transparent"
                    href="/profile"
                  >
                    Profile settings
                  </a>
                </li>
                <li className="text-blue-cream hover:text-white rounded-none">
                  <button
                    className="dropdown-item pl-4 hover:bg-blue-cream rounded-none focus:bg-transparent active:bg-transparent"
                    onClick={logout}
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
