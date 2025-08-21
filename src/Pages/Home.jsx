import React from "react";
import { useUser } from "../Contexts/UserContext";
import FollowersCard from "../Components/FollowersCount";
import { FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const Home = () => {
  const { user } = useUser();

  const socialLinks = [
    {
      icon: <FaYoutube />,
      label: "Youtube",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <FaTiktok />,
      label: "Tiktok",
      color: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <div className=" md:ml-24 p-9 flex justify-center items-start h-100 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-7xl mt-10">
        {socialLinks.map((socialLink, idx) => (
          <FollowersCard key={idx} social={socialLink} />
        ))}
      </div>
    </div>
  );
};

export default Home;
