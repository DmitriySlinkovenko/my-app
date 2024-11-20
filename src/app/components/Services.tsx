import Image from "next/image";
import React from "react";
import Button from "./Button";

const Services = () => {
  return (
    <section className="py-24 px-32 bg-[#0B0B0B] w-full flex flex-col items-center">
      <div className="text-center">
        <h3 className="text-orange text-xl">Our Services</h3>
        <h2 className="text-white font-bold text-5xl mt-[5px]">
          <span className="text-orange">Solutions</span> Tailored to You
        </h2>
      </div>
      <div className="text-white flex gap-12 w-full mt-12 justify-center font-semibold text-2xl">
        <div className="flex gap-6 flex-col">
          <Image
            width={363}
            height={260}
            alt="Key duplication picture"
            src="/3.png"
          />
          <p>Key Duplication</p>
          <Button text="Contact now" styles="btn-secondary" />
        </div>
        <div className="flex gap-6 flex-col">
          <Image
            width={363}
            height={260}
            src="/4.png"
            alt="All keys lost picture"
          />
          <p>All Keys Lost</p>
          <Button text="Contact now" styles="btn-secondary" />
        </div>
        <div className="flex gap-6 flex-col">
          <Image width={363} height={260} src="/5.png" alt="Vehicle Lockout" />
          <p>Vehicle Lockout</p>
          <Button text="Contact now" styles="btn-secondary" />
        </div>
      </div>
    </section>
  );
};

export default Services;
