import React from "react";
import { pricingOptions } from "../constants/index";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="mt-20">
      {/* Responsive heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center tracking-wide mb-8">
        Pricing
      </h1>

      <div className="flex flex-wrap mx-6">
        {pricingOptions.map((p, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-500 rounded-xl">
              {/* Plan Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                {p.title}{" "}
                {p.title === "Pro" && (
                  <span className="text-orange-500 text-sm sm:text-base md:text-lg">
                    (Most popular)
                  </span>
                )}
              </h2>

              {/* Price */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl py-8">
                {p.price}{" "}
                <span className="text-neutral-500 text-sm sm:text-base md:text-lg">
                  /Month
                </span>
              </h2>

              {/* Features */}
              <div className="flex flex-col space-y-4">
                {p.features.map((f, i) => (
                  <div key={i} className="flex">
                    <div className="h-10 w-10">
                      <CheckCircle2 />
                    </div>
                    <div className="text-sm sm:text-base md:text-lg ml-2">
                      {f}
                    </div>
                  </div>
                ))}

                {/* Button */}
                <div className="mt-10">
                  <button className="w-full border border-red-900 rounded-lg py-2 text-lg sm:text-xl transition-all ease-in duration-300 hover:bg-orange-700 hover:cursor-pointer">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
