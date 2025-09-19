import React from "react";
import { features } from "../constants";
const FeatureSection = () => {
  return (
    <div className="flex flex-col mt-20 min-h-[800px] mx-4 border-b border-neutral-800">
      <div className="text-center">
        <span className="rounded-full text-orange-500 bg-neutral-900 uppercase text-sm px-2 py-1  ">
          Feature
        </span>
        <h1 className="text-6xl  mt-20 tracking-wide ">Easily build <span className="bg-gradient-to-r from-orange-500 to-red-900 text-transparent bg-clip-text">your code</span></h1>
      </div>
      <div className="mt-20 flex flex-wrap justify-evenly items-center space-y-20">
            {features.map((feature, index)=> (
                <div key={index} className="flex  w-full pl-10 lg:w-1/3 md:w-1/2 sm:w-1/2 " >
                        <div className="h-10  top-0 p-2 rounded-full bg-neutral-900 text-orange-500 ">
                            {feature.icon}
                        </div>
                        <div className="flex mt-2  ml-6 flex-col space-y-8  ">
                            <div className="text-xl ">{feature.text}</div>
                            <div className="ml-2  text-neutral-500">
                                {feature.description}
                            </div>
                        </div>
                </div>
            ))}
      </div>
    </div>
  );
};

export default FeatureSection;
