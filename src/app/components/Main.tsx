import React from "react";

import Button from "./Button";

const Main = () => {
  return (
    <section
      id="home"
      className="w-full sm:h-[594px] bg-[url('/main-bg.png')] bg-cover flex sm:px-5"
    >
      <div className="mx-auto max-w-[1440px] flex">
        <div className="py-[100px] sm:py-[152px] flex gap-5 flex-col">
          <h1 className="w-[300px] sm:w-[543px] px-3 sm:text-left text-center sm:px-0 text-white text-2xl sm:text-5xl font-bold">
            Unlock Your Day with{" "}
            <span className="text-[#F7931E]">SWIFT CAR KEYS</span>
          </h1>
          <p className="text-white w-[300px] sm:text-left text-center sm:px-0 px-3 sm:w-[464px] text-md sm:text-xl font-semibold">
            Lost Your Keys? We Brind Speed and Precision to Your Rescue
          </p>
          <Button text="Get in touch" styles="btn-primary z-10" />
        </div>
        <div className="hidden sm:block lg:w-[428px] md:w-[204px] h-full bg-[url('/Shape.svg')] bg-no-repeat z-0" />
      </div>
    </section>
  );
};

export default Main;
