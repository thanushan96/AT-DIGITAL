import React from "react";
import "../style.css";
import hero from "../assets/hero/andy-kelly-0e-vhmvql9g-unsplash-1.png";

const Home = () => {
  return (
    <div className="w-full ">
      <div className="relative">
        <div className="pt-20">
          <img
            src={hero}
            alt="hero"
            className="object-cover object-top h-full w-full"
          />
        </div>
        <div className="flex flex-col w-[375px] gap-[20px] pt-[24px] pb-[32px] px-[20px] bg-white [background:linear-gradient(180deg,rgb(28,189,221)_27.86%,rgb(77,202,121)_100%)] items-start relative">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[36px] tracking-[-0.72px] leading-[36px]">
            We Crush Your
            <br />
            Competitors,
            <br />
            Goals, And Sales,
            <br />
            Records - Without
            <br />
            The B.s.
          </p>
          <button className="inline-flex items-start gap-[8px] px-[20px] py-[12px] relative bg-[#f28d35] rounded-[4px] all-[unset] box-border">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[14px] tracking-[-0.28px] leading-[14px] whitespace-nowrap">
              GET FREE CONSULTATION
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
