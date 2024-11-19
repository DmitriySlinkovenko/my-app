import React from "react";

type ButtonProps = {
  text: string;
  styles: string;
};

const Button = ({ text, styles }: ButtonProps) => {
  return <button className={styles}>{text}</button>;
};

export default Button;
