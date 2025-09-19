import React from "react";
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants/index";
import code from "../assets/code.jpg";

const Workflow = () => {
  return (
    <div className="mt-20">
      {/* Responsive heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-center">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-900 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h1>

      <div className="px-8 mt-2 flex flex-col lg:flex-row lg:space-x-12 justify-between">
        <div className="w-full lg:w-1/2">
          <img src={code} alt="code" />
        </div>

        <div className="flex flex-col w-full mt-12 space-y-12 lg:w-1/2">
          {checklistItems.map((check, index) => (
            <div key={index} className="flex space-x-3">
              <div className="h-10 w-10 text-green-400">
                <CheckCircle2 />
              </div>
              <div className="ml-1">
                {/* Responsive checklist title */}
                <div className="text-base sm:text-lg md:text-xl font-medium">
                  {check.title}
                </div>
                {/* Responsive description */}
                <div className="mt-2 text-sm sm:text-md md:text-lg text-neutral-500">
                  {check.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
