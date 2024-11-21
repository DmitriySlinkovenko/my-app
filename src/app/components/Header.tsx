import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {
  const phone = "+1(516)855-8419";
  return (
    <>
      <header className="pt-[50px]">
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

        <Navbar />
      </header>
    </>
  );
};

export default Header;
