import React from "react";
import Button from "./Button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="h-[897px] w-full bg-black py-24 px-32 text-white flex gap-[75px]"
    >
      <div className="w-[587px] h-[697px] relative">
        <div className="bg-[url('/1.png')] h-[399px] w-[459px] bg-no-repeat absolute top-[300px] left-[130px]"></div>
        <Image src="/2.png" width={435} height={543} alt="About us image" />
      </div>
      <div className="w-[503px]">
        <h3 className="text-orange text-xl">About Us</h3>
        <div className="mt-5 flex gap-6 flex-col">
          <h2 className="text-5xl font-bold">
            <span className="text-orange ">Your Trusted Partner</span> for Fast
            Key Replacements
          </h2>
          <p className="text-base">
            At Swift Car Keys, we believe that putting in a lot of hard work
            ensures the best service. We are here to provide you the most
            competitive prices and fast service. We use high quality keys that
            rival those provide by the manufacturer of your vehicle, and that
            cost you a fraction of what the dealership would charge. Our
            licensed locksmiths make it seemingly easy to program a key to
            almost any car on the market. Making a car key has never been
            simpler with Swift Car Keys.
          </p>
          <Button text="Get in touch" styles="btn-primary" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
