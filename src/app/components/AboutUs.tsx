import React from "react";
import Button from "./Button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full bg-black py-24 px-3 sm:px-32 text-white flex"
    >
      <div className="max-w-[1440px] w-full flex-col md:flex-col flex lg:flex-row  items-center justify-between mx-auto">
        <div className="max-w-[587px] sm:mb-[56px] lg:mr-[230px] w-full sm:h-[697px] relative">
          <Image
            src="/1.png"
            width={459}
            height={399}
            className="hidden sm:inline sm:absolute sm:top-[300px] sm:left-[130px]"
            alt="About us image"
          />
          <Image
            src="/2.png"
            width={435}
            height={543}
            alt="About us image"
            className="mb-5 sm:mb-0 rounded-[60px] sm:rounded-none"
          />
        </div>
        <div className="max-w-[503px] w-full">
          <p className="text-orange lg:text-xl sm:text-lg">About Us</p>
          <div className="mt-5 flex gap-6 flex-col">
            <h2 className="sm:text-base md:text-2xl lg:text-5xl font-bold  ">
              <span className="text-orange ">Your Trusted Partner</span> for
              Fast Key Replacements
            </h2>
            <p className="lg:text-base">
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
      </div>
    </section>
  );
};

export default AboutUs;
