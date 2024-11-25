import Image from "next/image";
import React from "react";
import Button from "./Button";

const Services = () => {
  return (
    <section
      id="service"
      className="pt-3 pb-10  sm:py-24 px-3 sm:px-32 bg-[#0B0B0B] w-full flex flex-col items-center"
    >
      <div className="text-center">
        <p className="text-orange text-xl">Our Services</p>
        <p className="text-white font-bold text-5xl mt-[5px]">
          <span className="text-orange">Solutions</span> Tailored to You
        </p>
      </div>
      <div className="text-white flex flex-col sm:flex-row gap-12 w-full mt-12 justify-center font-semibold text-2xl">
        <div className="flex  gap-6 flex-col items-center sm:items-start overflow-hidden rounded-t-3xl">
          <Image
            width={363}
            height={260}
            alt="Key duplication picture"
            src="/3.png"
            className="hover:scale-105 duration-1000"
          />
          <p>Key Duplication</p>
          <Button text="Contact now" styles="btn-secondary" />
        </div>
        <div className="flex gap-6 flex-col items-center sm:items-start overflow-hidden rounded-t-3xl">
          <Image
            width={363}
            height={260}
            src="/4.png"
            alt="All keys lost picture"
            className="hover:scale-105 duration-1000"
          />
          <p>All Keys Lost</p>
          <Button text="Contact now" styles="btn-secondary" />
        </div>
        <div className="flex gap-6 flex-col items-center sm:items-start  overflow-hidden rounded-t-3xl">
          <Image
            width={363}
            height={260}
            src="/5.png"
            alt="Vehicle Lockout"
            className="hover:scale-105 duration-1000"
          />
          <p>Vehicle Lockout</p>
          <Button text="Contact now" styles="btn-secondary" />
        </div>
      </div>
    </section>
  );
};

export default Services;
