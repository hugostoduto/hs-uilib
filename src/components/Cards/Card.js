import React from 'react';
import "./Card.css"
export const Card = ({ title, description, image, alt, btnTitle, link, newPage }) => {
  const stingLength = description.length
  const limit = stingLength > 140 ? description.substring(0, 140) + "..." : description

  console.log(limit.toString())
  return (

    <div className="hs-uilib-card-container">
      <img src={image} alt={alt} className="hs-uilib-card-img" />

      <h3 className="hs-uilib-card-title">{title}</h3>
      <hr />
      <p className="hs-uilib-card-description">{limit}</p>

      <a href={link} target={newPage ? "" : "_blank"} className="hs-uilib-card">{btnTitle}</a>
    </div>

  );
};


