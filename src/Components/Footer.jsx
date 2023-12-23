import React from "react";
import "../style.css";
import logo from "../assets/logo/Logo.png";
import line from "../assets/Line 6.png";

const Footer = () => {
  const technologies = [
    "Reactjs",
    "Gatsby",
    "NextJS",
    "NodeJS",
    "GraphQL",
    "Laravel",
  ];
  const services = [
    "Social Media Marketing",
    "Web & Mobile App Development",
    "Data & Analytics",
    "Google Marketing solutions",
    "Search Engine Optimization",
  ];

  return (
    <div className="footer-container flex flex-col md:flex-col w-full items-center gap-8 pt-[2.5rem] pb-2 px-4 bg-[#6b3cc9]">
      <div className="flex flex-col lg:flex-row w-full  md:px-10">
        {/* Section 1*/}
        <div className="flex flex-col items-start gap-4 w-full sm:w-1/2 lg:w-1/3 ">
          <img
            className="max-w-full h-auto mt-[-0.694rem]"
            alt="Logo"
            src={logo}
          />
          <p className="mb-6 font-normal text-white text-[1rem]  pb-[3.75rem] mr-1">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row w-full lg:w-2/3   lg:ml-[10rem]">
          {/* Technology Column */}
          <div className="flex flex-col w-full md:w-1/2 items-start gap-4">
            <div className="font-semibold text-white text-[1.313rem] ">
              Our Technologies
            </div>
            <div className="flex flex-col items-start ">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="font-medium text-white text-[0.875rem] pt-[0.75rem]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3*/}
          <div className="flex flex-col w-full md:w-1/2 items-start gap-4 pt-[2.5rem] md:pt-0 md:pl-20">
            <div className="font-semibold text-white text-[1.313rem] ">
              Our Services
            </div>
            <div className="flex flex-col items-start gap-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="font-medium text-white text-[0.875rem] pt-[0.75rem]"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy */}
      <div className="mt-6 text-white text-[0.875rem]">
        <img
          src={line}
          alt="Line"
          className="block mx-auto max-w-full h-auto mb-2"
        />
        <p className="text-center">Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
