import React from "react";

import Button from "./Button";

const Main = () => {
  return (
    <section className="w-full h-[594px] bg-[url('/main-bg.png')] bg-cover relative flex items-center">
      <div className="py-[152px] px-[125px] flex gap-5 flex-col">
        <h1 className="w-[543px] text-white text-5xl font-bold z">
          Unlock Your Day with{" "}
          <span className="text-[#F7931E]">SWIFT CAR KEYS</span>
        </h1>
        <p className="text-white w-[464px] text-xl font-semibold">
          Lost Your Keys? We Brind Speed and Precision to Your Rescue
        </p>
        <Button text="Get in touch" styles="btn-primary z-10" />
      </div>
      <div className="w-full h-full bg-[url('/Shape.svg')] bg-no-repeat absolute bg-right right-36 z-0" />
    </section>
  );
};

export default Main;
