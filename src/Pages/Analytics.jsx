import React from "react";
import Notification from "../Components/Notifications";
import { motion } from "framer-motion";
import { useTwitterStats } from "../Contexts/TwitterContext";
import { Button } from "@material-tailwind/react";

const Analytics = () => {
  const { getUser } = useTwitterStats;

  // async function getUser(e) {
  //   const url = "https://api.x.com/2/users/by/username/{username}";
  //   const options = {
  //     method: "GET",
  //     headers: { Authorization: "Bearer <token>" },
  //     body: undefined,
  //   };
  //   alert("Started");
  //   try {
  //     const response = await fetch(url, options);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  return (
    <motion.div
      className="w-full h-[100vh] flex flex-col gap-5 justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-2xl"> Analytics</p>

      <Button onClick={() => getUser}>Get the stuff</Button>
    </motion.div>
  );
};

export default Analytics;
