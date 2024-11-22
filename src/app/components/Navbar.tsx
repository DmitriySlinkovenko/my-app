import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="bg-[#0A1219] h-[85px] py-[15px] px-[125px] text-white">
      <div className="flex justify-between max-w-[1440px] mx-auto">
        <div>
          <Link href="/">
            <Image
              src="\logo.svg"
              className="flex-1"
              height={55}
              width={204}
              alt="Swift Car Keys logo"
            />
          </Link>
        </div>
        <div className="sm:hidden lg:block">
          <Link href="/" className="ml-[50px]">
            Home
          </Link>
          <Link href="#about" className="ml-[50px]">
            About Us
          </Link>
          <Link href="#service" className="ml-[50px]">
            Services
          </Link>
          <Button text="Contact" styles="btn-secondary ml-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
