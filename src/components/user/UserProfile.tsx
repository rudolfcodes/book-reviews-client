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
  console.log({ user, loading });

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
          <img
            alt={`${user.username}'s avatar`}
            src="/images/avatars/default.png"
          />
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

export default UserProfile;
