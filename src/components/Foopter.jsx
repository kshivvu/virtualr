import React from "react";
import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../constants/index";

const Foopter = () => {
  return (
    <footer className="border-t mx-6 border-neutral-700">
      <div className="flex flex-wrap my-10 text-center sm:text-left">
        {/* Resources */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 sm:mb-0">
          <h2 className="font-bold mb-6 text-lg">Resources</h2>
          <div className="flex flex-col items-center sm:items-start">
            {resourcesLinks.map((r, i) => (
              <a
                className="mb-2 text-neutral-300 hover:text-orange-400 transition-transform duration-300 hover:scale-105"
                href={r.href}
                key={i}
              >
                {r.text}
              </a>
            ))}
          </div>
        </div>

        {/* Platform */}
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 sm:mb-0">
          <h2 className="font-bold mb-6 text-lg">Platform</h2>
          <div className="flex flex-col items-center sm:items-start">
            {platformLinks.map((r, i) => (
              <a
                className="mb-2 text-neutral-300 hover:text-orange-400 transition-transform duration-300 hover:scale-105"
                href={r.href}
                key={i}
              >
                {r.text}
              </a>
            ))}
          </div>
        </div>

        {/* Community */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <h2 className="font-bold mb-6 text-lg">Community</h2>
          <div className="flex flex-col items-center sm:items-start">
            {communityLinks.map((r, i) => (
              <a
                className="mb-2 text-neutral-300 hover:text-orange-400 transition-transform duration-300 hover:scale-105"
                href={r.href}
                key={i}
              >
                {r.text}
              </a>
            ))}
          </div>
        </div>
      </div>
      <h1 className="text-center text-2xl">Developer <a target="blank" href="https://instagram.com/#kshivvu" className="text-orange-500">@Kshivvu</a></h1>
    </footer>
  );
};

export default Foopter;
