import React from "react";
import { useRouter } from "next/navigation";

const BottomNavBar = () => {
  const router = useRouter();
  const handlePageChange = (page: string) => {
    console.log("Navigating to:", page);
    router.push(`/${page}`);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-around items-center h-16">
      <div
        className="flex flex-col items-center cursor-pointer hover:text-blue-500"
        onClick={() => handlePageChange("discover")}
      >
        <i className="fas fa-search text-gray-600"></i>
        <span className="text-xs text-gray-600">Discover</span>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer hover:text-blue-500"
        onClick={() => handlePageChange("my-clubs")}
      >
        <i className="fas fa-users text-gray-600"></i>
        <span className="text-xs text-gray-600">My Clubs</span>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer hover:text-blue-500"
        onClick={() => handlePageChange("notifications")}
      >
        <i className="fas fa-bell text-gray-600"></i>
        <span className="text-xs text-gray-600">Notifications</span>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer hover:text-blue-500"
        onClick={() => handlePageChange("profile")}
      >
        <i className="fas fa-user text-gray-600"></i>
        <span className="text-xs text-gray-600">Profile</span>
      </div>
    </div>
  );
};

export default BottomNavBar;
