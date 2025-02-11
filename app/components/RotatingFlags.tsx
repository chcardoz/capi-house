"use client"
import FlagColumn from './FlagColumn';

const LandingPage: React.FC = () => {
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
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-white tracking-tight font-jersey15">
            CAPI
          </h1>
          <p className="font-serif text-md md:text-lg text-blue-200 max-w-md leading-relaxed tracking-wide">
            Residency for immigrant founders
          </p>
        </div>
      </div>

      <div className='md:hidden w-full px-7 pt-28 pb-7 bg-gradient-to-br from-blue-950 to-black fixed bottom-0 left-0 z-10 flex flex-col justify-end'>
      <div>
          <h1 className="text-8xl md:text-9xl font-bold text-white tracking-tight font-jersey15">
            CAPI
          </h1>
          <p className="font-serif text-md md:text-lg text-blue-200 max-w-md leading-relaxed tracking-wide">
            Residency for immigrant founders
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;