import React from "react";

import Button from "./Button";

const Main = () => {
  return (
    <section
      id="home"
      className="w-full h-[594px] bg-[url('/main-bg.png')] bg-cover md:bg-left flex px-5"
    >
      <div className="flex relative mx-auto max-w-[1440px]">
        <div className="py-[152px] flex gap-5 flex-col">
          <h1 className="w-[543px] text-white text-5xl font-bold z">
            Unlock Your Day with{" "}
            <span className="text-[#F7931E]">SWIFT CAR KEYS</span>
          </h1>
          <p className="text-white w-[464px] text-xl font-semibold">
            Lost Your Keys? We Brind Speed and Precision to Your Rescue
          </p>
          <Button text="Get in touch" styles="btn-primary z-10" />
        </div>
        <div className="lg:w-[428px] md:w-[188px] h-full bg-[url('/Shape.svg')] bg-no-repeat relative  z-0" />
      </div>
    </section>
  );
};

export default Main;
