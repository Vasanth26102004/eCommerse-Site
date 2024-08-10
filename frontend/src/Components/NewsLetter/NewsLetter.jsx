import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="neswletter">
      <h1>Get Exclusive Offers on Your E-Mail</h1>
      <p>Subscribe to Our NewsLetter and Stay updated</p>
      <div>
        <input type="email" placeholder="Your EMail ID" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
