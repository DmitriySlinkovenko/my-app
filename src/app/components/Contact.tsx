import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-[125px] px-6 sm:px-0 flex justify-center bg-[url('/6.png')] text-white bg-no-repeat bg-cover"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-center sm:text-left text-4xl sm:text-5xl font-bold max-w-[463px]">
          <span className="text-orange">Car Key Troubles?</span>Lets Solve Them
          Swiftly!
        </h3>
        <Button text="Get in touch" styles="btn-primary mt-[25px]" />
      </div>
    </section>
  );
};

export default Contact;
