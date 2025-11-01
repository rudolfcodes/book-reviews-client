"use client";

import useUser from "@/hooks/useUser";
import React from "react";

const profileItems = [
  { label: "My Profile", href: "/profile" },
  { label: "Notifications", href: "/notifications" },
  { label: "Clubs", href: "/clubs" },
  { label: "Settings", href: "/settings" },
  { label: "Logout", href: "/auth/login" },
];

const UserProfileDropdown = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          {user.avatar ? (
            <img alt={`${user.username}'s avatar`} src={user.avatar} />
          ) : (
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full">
              {user.username.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      </div>

      <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        {profileItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="text-slate-600 hover:text-slate-800">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfileDropdown;
