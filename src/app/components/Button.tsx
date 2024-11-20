"use client";

import React from "react";

type ButtonProps = {
  text: string;
  styles: string;
};

const Button = ({ text, styles }: ButtonProps) => {
  const number = "+1(516)855-8419";
  const callAction = () => {
    window.location.href = `tel:${number}`;
  };
  return (
    <button className={styles} type="button" onClick={callAction}>
      {text}
    </button>
  );
};

export default Button;
