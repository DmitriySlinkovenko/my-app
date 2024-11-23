"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col md:justify-between gap-8 lg:flex-row justify-between pt-[50px] pb-24 px-20 sm:px-32 max-w-[1440px] mx-auto">
        <div>
          <Image
            src="\logo.svg"
            className="flex-1 justify-self-center"
            height={55}
            width={204}
            alt="Swift Car Keys logo"
          />
          <p className="max-w-[300px] text-xs sm:text-xl mt-7 justify-self-center">
            Proudly servicing Brooklyn, Queens, and Nassau in New York
          </p>
        </div>
        <div className="sm:max-lg:flex sm:max-lg:flex-col sm:max-lg:items-center">
          <p className="text-orange text-lg font-semibold mb-[25px] max-w-fit">
            Quick Links
          </p>
          <div className="flex flex-col flex-wrap sm:max-w-[395px] w-full xl:w-[395px] max-h-28 gap-5">
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

        <div className="flex flex-col sm:max-lg:items-center">
          <p className="text-orange text-lg font-semibold">
            Get in Touch With Us
          </p>
          <div className="flex flex-col  mt-6 gap-5">
            <Link className="flex" href={`tel:+1(516)855-8419`}>
              <Image
                src="\porange.svg"
                width={18}
                height={18}
                className="mr-3"
                alt="phone logo"
              />
              +1 (516) 855-8419
            </Link>
            <p className="flex">
              <Image
                src="\eorange.svg"
                width={18}
                height={18}
                className="mr-3"
                alt="email logo"
              />
              thekeyshield@gmail.com
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <Link
              className="flex"
              href={`https://www.instagram.com/swift_car_keys/`}
              target="_blank"
            >
              <Image
                src="\instagram.svg"
                width={36}
                height={36}
                className="mr-3"
                alt="Instagram link"
              />
            </Link>
            <Link
              className="flex"
              href={`https://www.facebook.com/profile.php?id=61555618899701`}
              target="_blank"
            >
              <Image
                src="\facebook.svg"
                width={36}
                height={36}
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
