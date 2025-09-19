import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center mt-12 lg:mt-40 px-4">
      {/* Heading */}
      <header className="text-3xl sm:text-5xl lg:text-7xl font-bold text-center tracking-wide leading-tight">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for <br className="hidden sm:block" /> developers
        </span>
      </header>

      {/* Subtext */}
      <p className="mt-8 sm:mt-10 text-neutral-500 text-center text-sm sm:text-base md:text-lg max-w-3xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. <br className="hidden sm:block" />
        Get started today and turn your imagination into immersive reality!
      </p>

      {/* Buttons */}
      <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 justify-center">
        <button className="py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md text-white font-medium transition-transform duration-300 hover:scale-105">
          Start for free
        </button>
        <button className="py-3 px-6 bg-transparent rounded-md border border-white text-white font-medium transition-colors duration-300 hover:border-orange-500 hover:text-orange-400">
          Documentation
        </button>
      </div>

      {/* Videos */}
      <div className="flex flex-col sm:flex-row justify-center mt-16 w-full max-w-6xl gap-6">
        <video
          loop
          muted
          autoPlay
          className="w-full sm:w-1/2 border border-orange-700 rounded-lg shadow-md shadow-orange-700"
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video
          loop
          muted
          autoPlay
          className="w-full sm:w-1/2 border border-orange-700 rounded-lg shadow-md shadow-orange-700"
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
