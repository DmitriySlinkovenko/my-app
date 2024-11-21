import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-black text-white">
      <div className="flex justify-between pt-[50px] pb-24 px-32 max-w-[1440px] mx-auto">
        <div>
          <Image
            src="\logo.svg"
            className="flex-1"
            height={55}
            width={204}
            alt="Swift Car Keys logo"
          />
          <p className="max-w-[300px] text-xl mt-7">
            Proudly servicing Brooklyn, Queens, and Nassau in New York
          </p>
        </div>
        <div className="">
          <p className="text-orange text-lg font-semibold mb-[25px] max-w-fit">
            Quick Links
          </p>
          <div className="flex flex-col flex-wrap w-[395px] max-h-28 gap-5">
            <Link className="max-w-fit" href="#home">
              Home
            </Link>
            <Link className="max-w-fit" href="#about">
              About us
            </Link>
            <Link className="max-w-fit" href="#service">
              Our Services
            </Link>
            <Link className="max-w-fit" href="#contact">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-orange text-lg font-semibold">
            Get in Touch With Us
          </p>
          <div className="flex flex-col mt-6 gap-5">
            <Link className="flex" href={`tel:+1(516)855-8419`}>
              <Image
                src="\porange.svg"
                width={18}
                height={9}
                unoptimized
                className="mr-3"
                alt="phone logo"
              />
              +1 (516) 855-8419
            </Link>
            <Link className="flex" href={`tel:+1(516)855-8419`}>
              <Image
                src="\eorange.svg"
                width={18}
                height={9}
                unoptimized
                className="mr-3"
                alt="email logo"
              />
              thekeyshield@gmail.com
            </Link>
          </div>

          <div className="mt-6 flex gap-4">
            <Link className="flex" href={`https://instagram.com/swift`}>
              <Image
                src="\instagram.svg"
                width={36}
                height={36}
                unoptimized
                className="mr-3"
                alt="Instagram link"
              />
            </Link>
            <Link className="flex" href={`https://facebook.com/swift`}>
              <Image
                src="\facebook.svg"
                width={36}
                height={36}
                unoptimized
                className="mr-3"
                alt="Facebook link"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-[25px] border-t border-white">
        <p className="text-center">
          Copyright © 2024 Swift Car Keys All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
