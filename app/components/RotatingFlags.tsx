"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FlagColumn from "./FlagColumn";
import ConvertKitForm from "./ConvertKit";

const tabs: Array<keyof typeof tabContent> = ["Home", "About", "Vibes"];

const tabContent = {
  Home: (
    <div className="bg-gray-900 p-6 rounded-lg w-full">
      <p className="font-sans text-md md:text-lg text-blue-200 max-w-md leading-relaxed tracking-wide">
        Home for immigrant founders
      </p>
      <ConvertKitForm/>
    </div>
  ),
  About: (
    <div className="bg-gray-900 p-6 rounded-lg font-sans text-md md:text-lg text-blue-200 leading-relaxed tracking-wide w-full">
      <p>CAPI is a residency for ambitious immigrant founders, offering:</p>
      <ul className="list-disc list-inside mt-3">
        <li>Shared and private rooms</li>
        <li>Co-working living room</li>
        <li>Weekly ship-its on Friday</li>
        <li>Workshops from experienced founders</li>
        <li>Visa-related talks from experts</li>
        <li>Hardware lab, podcast/demo room, partnerships</li>
      </ul>
    </div>
  ),
  Vibes: (
    <div className="bg-gray-900 p-6 rounded-lg font-sans text-md md:text-lg text-blue-200 leading-relaxed tracking-wide w-full">
      <ul className="list-disc list-inside mt-3">
        <li>Late-night brainstorming sessions</li>
        <li>Supportive and driven immigrant founder community</li>
        <li>Deep discussions on tech, business, and culture</li>
      </ul>
    </div>
  ),
};

const LandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof tabContent>("Home");

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center">
      {/* Left Section */}
      <div className="w-full h-screen md:w-1/2 bg-black flex justify-center items-center gap-14 md:gap-24 overflow-hidden">
        <FlagColumn direction="up" />
        <FlagColumn direction="down" />
        <FlagColumn direction="up" />
        <FlagColumn direction="down" />
      </div>

      {/* Right Section */}
      <div className="w-full hidden md:w-1/2 bg-gradient-to-br from-blue-950 to-black md:flex flex-col justify-end p-7 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-white tracking-tight font-jersey15">
          CAPI HOUSE
        </h1>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
        >
          {tabContent[activeTab]}
        </motion.div>

        {/* Tabs at the bottom */}
        <div className="mt-4 flex justify-center space-x-4 border-blue-800 pt-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`font-sans text-lg px-4 py-2 transition-colors ${
                activeTab === tab ? "text-white border-blue-500" : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Fixed Bottom Section */}
      <div className='md:hidden w-full px-7 pt-5 pb-7 bg-gradient-to-br from-blue-950 to-black fixed bottom-0 left-0 z-10 flex flex-col justify-end'>
        <h1 className="text-5xl font-bold text-white tracking-tight font-jersey15 text-center">CAPI HOUSE</h1>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="mt-4"
        >
          {tabContent[activeTab]}
        </motion.div>
        <div className="mt-4 flex justify-center space-x-4 border-blue-800 pt-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`font-sans text-lg px-4 py-2 transition-colors ${
                activeTab === tab ? "text-white border-blue-500" : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
