"use client";

import React from "react";
import Link from "next/link";
import useUser from "@/hooks/useUser";
import Navbar from "./Navbar";
import InnerWrapper from "./InnerWrapper";

const Header = () => {
  // Header should have: logo, current user avatar on the right, and links to sign up and login if no user is logged in
  // If user is logged in, show a dropdown with profile settings and logout option
  const { user, logout } = useUser();

  return (
    <Navbar>
      <div className="h-full max-w-desktop flex justify-between items-center font-raleway">
        <InnerWrapper>
          {!user ? (
            <div className="flex gap-4">
              <Link
                className="px-6 py-2 text-sm font-medium border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 hover:scale-105 transition-all duration-200 transform"
                href="/auth/login"
              >
                Log in
              </Link>
              <Link
                className="px-6 py-2 text-sm font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-200 transform"
                href="/auth/register"
              >
                Join community
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
        </InnerWrapper>
      </div>
    </Navbar>
  );
};

export default Header;
