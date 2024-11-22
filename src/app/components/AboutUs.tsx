import React from "react";
import Button from "./Button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about" className="w-full bg-black py-24 px-32 text-white flex">
      <div className="max-w-[1440px] w-full md:flex-col flex lg:flex-row  items-center justify-between mx-auto">
        <div className="max-w-[587px] md:mb-[56px] lg:mr-[230px] w-full h-[697px] relative">
          <Image
            src="/1.png"
            width={459}
            height={399}
            className="absolute top-[300px] left-[130px]"
            alt="About us image"
          />
          <Image src="/2.png" width={435} height={543} alt="About us image" />
        </div>
        <div className="max-w-[503px] w-full">
          <h3 className="text-orange lg:text-xl md:text-lg sm:text-sm">
            About Us
          </h3>
          <div className="mt-5 flex gap-6 flex-col">
            <h2 className="sm:text-baseline md:text-2xl lg:text-5xl font-bold  ">
              <span className="text-orange ">Your Trusted Partner</span> for
              Fast Key Replacements
            </h2>
            <p className="sm:text-xs lg:text-base">
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
