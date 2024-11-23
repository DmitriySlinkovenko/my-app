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
        <div className="fixed top-0 w-full bg-black text-white h-[50px] z-20 text-[12px] sm:text-base">
          <div className="flex justify-center sm:justify-end px-1 sm:px-0 sm:mr-32 h-full items-center max-w-[1440px]">
            <Image
              src="\phone.svg"
              width={18}
              height={18}
              unoptimized
              className="mr-1 sm:mr-3 sm:ml-3"
              alt="phone logo"
            />
            <a href={`tel:${phone}`} className="mr-1 sm:mr-3">
              +1 (516) 855-8419
            </a>
            |
            <Image
              src="\email.svg"
              width={18}
              height={18}
              unoptimized
              className="mr-1 ml-1 sm:mr-3 sm:ml-3"
              alt="email logo"
            />
            thekeyshield@gmail.com
          </div>
        </div>

        <nav className="hidden sm:block w-full relative">
          <Navbar />
        </nav>

        <div className="bg-black w-full block px-3 py-3 sm:hidden">
          <Image
            src="\logo.svg"
            className=""
            height={55}
            width={200}
            alt="Swift Car Keys logo"
          />
        </div>

        <button
          className="block lg:hidden absolute top-14 right-4 sm:top-16 sm:right-20"
          type="button"
          onClick={toggleMenu}
        >
          {isOpen ? (
            ""
          ) : (
            <Image
              src="/hamburger.svg"
              alt="hamburger menu icon"
              width={56}
              height={56}
            />
          )}
        </button>

        <nav
          className={`fixed left-0 right-0 z-20 top-[50px] h-full overflow-hidden mx-auto backdrop-blur-sm transition-all duration-300 ease-in-out block ${
            isOpen ? "max-h-screen" : `max-h-0`
          }`}
        >
          <div className="flex flex-col items-center pt-14 text-white text-3xl font-bold">
            <div className="flex flex-col gap-3 relative">
              <button
                className={`${
                  isOpen ? `absolute -top-12 -right-16 block` : "hidden"
                }`}
                onClick={toggleMenu}
              >
                <Image
                  src="/closew.svg"
                  width={50}
                  height={50}
                  alt="close icon"
                />
              </button>
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                href="/"
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                href="#about"
              >
                About Us
              </Link>
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                href="#service"
              >
                Services
              </Link>
              <Button text="Contact" styles="btn-primary mb-[50px]" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
