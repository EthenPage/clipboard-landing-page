import React from "react";
import IMAGES from "../Assets/Images";

function Agents() {
  return (
    <>
      <section className="agents">
        <div className="agents__items">
          <img className="resize" src={IMAGES.google} alt="google" />
          <img className="resize" src={IMAGES.ibm} alt="imb" />
          <img className="resize" src={IMAGES.microsoft} alt="microsoft" />
          <img className="resize" src={IMAGES.hp} alt="hp" />
          <img className="resize" src={IMAGES.vector} alt="vector" />
        </div>
      </section>
    </>
  );
}

export default Agents;
