import React from "react";
import IMAGES from "../Assets/Images";

function Snippets() {
  return (
    <>
      <section className="snippets">
        <div className="snippets__head">
          <h2>Keep track of your snippets</h2>
          <p className="desktop__text">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
        <div className="snippets__body">
          <div className="snippets__body__img">
            <img src={IMAGES.computer} alt="computers" />
          </div>
          <div className="snippets__body__text">
            <h3>Quick Search</h3>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>

            <h3>iCloud Sync</h3>
            <p>Instantly saves and syncs snippets across all your devices.</p>

            <h3>Complete History</h3>
            <p>
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Snippets;
