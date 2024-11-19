import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="pt-[50px]">
        <div className="fixed top-0 w-full bg-black text-white h-[50px]">
          <div className="flex justify-end mr-32 h-full items-center">
            <Image
              src="\phone.svg"
              width={18}
              height={9}
              unoptimized
              className="mr-3 ml-3"
              alt="phone logo"
            />
            +1(516)855-8419 |
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

        <Navbar />
      </header>
    </>
  );
};

export default Header;
