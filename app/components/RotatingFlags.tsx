"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import FlagColumn from "./FlagColumn";
import ConvertKitForm from "./ConvertKit";

const LandingPage: FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center">
      {/* Left Section */}
      <div className="w-full h-screen md:w-1/3 bg-black flex justify-center items-center overflow-hidden">
        <FlagColumn direction="up" />
      </div>

      {/* Right Section (Desktop) */}
      <div className="w-full hidden md:w-2/3 bg-gradient-to-br from-blue-950 to-black md:flex flex-col justify-end p-7 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-white tracking-tight font-jersey15">
          CAPI HOUSE
        </h1>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }} // Moved a little bit more to the left
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }} // Moved a little bit more to the left
          transition={{ duration: 0.4 }}
          className="mt-4 bg-gray-900 p-6 rounded-lg w-full"
        >
          <ConvertKitForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }} // Moved a little bit more to the left
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }} // Moved a little bit more to the left
          transition={{ duration: 0.4 }}
          className="mt-4"
        >
          <a
            href="https://escapevelocityclub.notion.site/Abouts-and-vybs-1989ec0abd1d80dea99cd58aedcd107a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg underline"
          >
            abouts and vybs
          </a>
        </motion.div>
      </div>

      {/* Mobile Fixed Bottom Section */}
      <div className="md:hidden w-full px-7 pt-5 pb-7 bg-gradient-to-br from-blue-950 to-black fixed bottom-0 left-0 z-10 flex flex-col justify-end">
        <h1 className="text-5xl font-bold text-white tracking-tight font-jersey15 text-center">
          CAPI HOUSE
        </h1>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }} // Moved a little bit more to the left
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }} // Moved a little bit more to the left
          transition={{ duration: 0.4 }}
          className="mt-4 bg-gray-900 p-6 rounded-lg w-full"
        >
          <ConvertKitForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }} // Moved a little bit more to the left
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }} // Moved a little bit more to the left
          transition={{ duration: 0.4 }}
          className="mt-4 text-center"
        >
          <a
            href="https://escapevelocityclub.notion.site/Abouts-and-vybs-1989ec0abd1d80dea99cd58aedcd107a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg underline"
          >
            abouts and vybs
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
