import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="logo">Techy</div>
        <div className="text">
          <span>
            <BsInstagram />
          </span>
          <span>
            <BsGoogle />
          </span>
          <span>
            <BsWhatsapp />
          </span>
          <div>
            <p>All rights reserved &copy; Techy</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
