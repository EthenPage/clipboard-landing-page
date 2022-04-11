import React from "react";
import IMAGES from "../Assets/Images";

function Access() {
  return (
    <>
      <section className="access">
        <h2>Access Clipboard anywhere</h2>
        <p>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <div>
          <img src={IMAGES.devices} alt="devices" />
        </div>
      </section>
    </>
  );
}

export default Access;
