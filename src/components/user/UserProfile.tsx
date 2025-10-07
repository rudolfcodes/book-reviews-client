"use client";

import useUser from "@/hooks/useUser";
import React from "react";

const profileItems = [
  { label: "My Profile", href: "/profile" },
  { label: "Notifications", href: "/notifications" },
  { label: "Clubs", href: "/clubs" },
  { label: "Settings", href: "/settings" },
  { label: "Logout", href: "/logout" },
];

const UserProfile = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="p-6 max-w-desktop mx-auto">
      <div
        tabIndex={0}
        role="button"
        className="text-4xl font-light text-slate-800 mb-6 tracking-tight"
      >
        {user.username}'s Profile
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu bg-white rounded-box w-full p-4 shadow"
      >
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

export default UserProfile;
