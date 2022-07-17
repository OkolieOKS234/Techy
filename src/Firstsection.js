import React from "react";

import maxstack from "./img/Maxstack.jpg";

function section() {
  return (
    <section className="hero">
      <img src={maxstack} alt="VR_headset" />
      <div className="txt">
        <h2>Hello Let's Join and revolutionize the world</h2>
        <div>
          <p>
            Share your ideas intuitively with the big growing community around
            the world
          </p>
          <input type="text" className="subscribe" />
          <button className="sub_btn">Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default section;
