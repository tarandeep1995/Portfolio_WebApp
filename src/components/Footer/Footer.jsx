import React from "react";
import "./Footer.css";
import img from './Footer.png'

const Footer = () => {
  return (
    <div className="footer" style={{ width: "200%", position: 'absolute',
    height: 'auto', marginTop:"1px"}}>
      <img src={img} alt="" />
    </div>
  );
};

export default Footer;

