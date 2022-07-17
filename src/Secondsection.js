import React from "react";
import imgearth from "./img/image-deep-earth.jpg";
import imgarcade from "./img/image-night-arcade.jpg";
import soccerteam from "./img/image-soccer-team.jpg";
import imagegrid from "./img/image-grid.jpg";
import imagefromabove from "./img/image-from-above.jpg";
import imagepocket from "./img/image-pocket-borealis.jpg";
import imagecuriosity from "./img/image-curiosity.jpg";
import imagefisheye from "./img/image-fisheye.jpg";
function Secondsection() {
  return (
    <>
      <div className="top">
        <h2 className="creation_text">OUR CREATION</h2>
        <button className="btn_more">SEE MORE</button>
      </div>
      <div className="work_gallery1">
        <img src={imgearth} alt="" />
        <img src={imgarcade} alt="" />
        <img src={soccerteam} alt="" />
        <img src={imagegrid} alt="" />
      </div>
      <div className="work_gallery1 slide2">
        <img src={imagefromabove} alt="" />
        <img src={imagepocket} alt="" />
        <img src={imagecuriosity} alt="" />
        <img src={imagefisheye} alt="" />
      </div>
    </>
  );
}

export default Secondsection;
