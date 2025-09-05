import React, { useEffect } from "react";
import { useUser } from "../Contexts/UserContext";
import { GoogleLogin } from "@react-oauth/google";
import ipadScreenshot from "../assets/iPad-Air-4-localhost.png";
import { motion } from "framer-motion";
import SocialIcons from "../Components/Icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser, handleError, handleSuccess, isLoading } = useUser();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("socially user");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //     navigate("/app/dashboard");
  //   }
  // }, []);

  return (
    <div className="w-screen h-screen gap-3 flex flex-col md:flex-row justify-center items-center p-3">
      {/* Left login panel */}
      <motion.div
        className="rounded-xl p-2 md:p-16 flex flex-col items-center justify-center  w-full lg:w-[50%] h-full text-center  backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-3xl font-bold font-mono bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-5">
          Welcome to Socially
        </h1>

        <motion.div
          className="w-36 h-0.5  rounded-full mb-6 bg-gradient-to-r from-indigo-400 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: "9rem" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />

        <p className="text-xl text-center mb-4">
          A Social Hub for keeping track of all your followers across different
          platforms
        </p>

        <div className="flex gap-9 px-9 rounded-full mb-7 mx-2">
          <SocialIcons />
        </div>

        <div className="relative w-[22rem] p-0.5 rounded-full bg-slate-800 cursor-pointer">
          {isLoading && (
            <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center rounded-full pointer-events-none">
              <div className="w-6 h-6 border-2 border-t-transparent border-white animate-spin rounded-full" />
            </div>
          )}
          <div
            className={`${isLoading ? "opacity-30 pointer-events-none" : ""}`}
          >
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleError}
              shape="pill"
              text="signin_with"
              theme="outline"
              size="lg"
              aria-label="Sign in with Google"
            />
          </div>
        </div>
      </motion.div>

      {/* Right image panel (hidden on mobile) */}
      <div className="flex w-full md:w-[50%] h-full rounded-lg items-center justify-center">
        <img
          src={ipadScreenshot}
          alt="App Screenshot"
          loading="lazy"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Login;
