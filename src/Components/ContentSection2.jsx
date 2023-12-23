import React from "react";
import image1 from "../assets/image 1.png";
import Button from "../Components/button/Button";

const ContentSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center relative">
      {/* Image Section for Mobile View */}
      <div className="w-full md:w-1/2 md:hidden">
        <img
          className="w-full h-auto object-contain"
          alt="Desktop"
          src={image1}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center gap-4 md:w-1/2 text-justify">
        <div className="mb-4 md:mb-8">
          <p className="text-2xl font-bold text-[#6b3cc9] text-center">
            Digital Strategy
            <br />
            Consulting
          </p>
        </div>
        <div className="md:px-8">
          <p className="font-normal text-black text-lg text-center md:text-justify">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
        </div>
        <div className="mt-[-1.00px] font-bold text-white text-sm">
          <Button onClick={() => console.log("Button clicked")}>
            LEARN MORE
          </Button>
        </div>
      </div>

      {/* Image Section for Desktop View */}
      <div className="w-full md:w-1/2 hidden md:block relative lg:ml-[300px]">
        <img
          className="w-full h-auto md:max-w-[414px] md:h-full object-contain"
          alt="Desktop"
          src={image1}
        />
      </div>
    </div>
  );
};

export default ContentSection;
