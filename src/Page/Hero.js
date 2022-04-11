import React from "react";
import Buttons from "../Components/Buttons";
import IMAGES from "../Assets/Images";

function Hero() {
  return (
    <>
      <header className="header">
        <div className="header__img">
          <img src={IMAGES.logo} alt="logo" />
        </div>
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <Buttons />
      </header>
    </>
  );
}

export default Hero;
