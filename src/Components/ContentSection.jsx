import React from "react";
import image2 from "../assets/image 2.png";
import Button from "../Components/button/Button";

const ContentSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center   relative mt-[-320px] md:mt-[-10px] lg:mt-[100px]">
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative ">
        <img
          className="w-full md:w-[414px] md:h-[414px] object-cover lg:mt-[100px] "
          alt="Dekstop"
          src={image2}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center gap-4 md:w-1/2 text-justify md:mt-[10rem]">
        <div className="mb-4 md:mb-8">
          {" "}
          {/* Added margin for spacing */}
          <p className="text-2xl font-bold text-[#6b3cc9] text-center  ">
            Web &amp; Mobile App
            <br />
            Development
          </p>
        </div>
        <div className="md:px-8">
          {" "}
          {/*  */}
          <p className="font-normal text-black text-lg text-center md:text-justify">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks that tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
        </div>

        <div className="mt-[-1.00px] font-bold text-white text-sm">
          <Button onClick={() => console.log("Button clicked")}>
            LEARN MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
