import React from "react";
import IMAGES from "../Assets/Images";

function Supercharge() {
  return (
    <>
      <section className="supercharge">
        <h2>Supercharge your workflow</h2>
        <p>We’ve got the tools to boost your productivity.</p>
        <div className="supercharge_items">
          <div className="item">
            <img className="resize" src={IMAGES.blacklist} alt="blacklist" />
            <h3>Create blacklists</h3>
            <p>
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </div>

          <div className="item">
            <img className="resize" src={IMAGES.text} alt="text" />
            <h3>Plain text snippets</h3>
            <p>
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>

          <div className="item">
            <img className="resize" src={IMAGES.preview} alt="preview" />
            <h3>Sneak preview</h3>
            <p>
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Supercharge;
