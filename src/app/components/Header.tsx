"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  const phone = "+1(516)855-8419";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <header className="pt-[50px] relative">
        <div className="fixed top-0 w-full bg-black text-white h-[50px] z-10">
          <div className="flex justify-end mr-32 h-full items-center max-w-[1440px]">
            <Image
              src="\phone.svg"
              width={18}
              height={9}
              unoptimized
              className="mr-3 ml-3"
              alt="phone logo"
            />
            <a href={`tel:${phone}`} className="mr-3">
              +1 (516) 855-8419
            </a>
            |
            <Image
              src="\email.svg"
              width={18}
              height={9}
              unoptimized
              className="mr-3 ml-3"
              alt="email logo"
            />
            thekeyshield@gmail.com
          </div>
        </div>

        <nav className="sm:block hidden w-full relative">
          <Navbar />
        </nav>

        <button
          className="sm:block lg:hidden absolute top-16 right-20"
          type="button"
          onClick={toggleMenu}
        >
          <Image
            src={isOpen ? "/closew.svg" : "/hamburger.svg"}
            alt="hamburger menu icon"
            width={56}
            height={56}
          />
        </button>

        <nav
          className={`absolute left-0 right-0 z-20 overflow-hidden mx-auto backdrop-blur-sm transition-all duration-300 ease-in-out block ${
            isOpen ? "max-h-screen" : `max-h-0`
          }`}
        >
          <div className="flex flex-col justify-center text-white text-3xl font-bold gap-3 h-svh">
            <Link href="/">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#service">Services</Link>
            <Button text="Contact" styles="btn-secondary mb-[50px]" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
