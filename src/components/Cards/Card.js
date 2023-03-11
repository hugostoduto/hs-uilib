import React from 'react';
import "./Card.css"
export const Card = ({ title, description, image, alt, btnTitle, link, newPage }) => {
  const descriptionLength = description.length
  const titleLength = title.length
  const descriptionLimit = descriptionLength > 140 ? description.substring(0, 140) + "..." : description
  const titleLimit = titleLength > 25 ? title.substring(0, 25) + "..." : title

  console.log(descriptionLimit.toString())
  return (

    <div className="hs-uilib-card-container">
      <img src={image} alt={alt} className="hs-uilib-card-img" />

      <h3 className="hs-uilib-card-title">{titleLimit}</h3>
      <hr />
      <p className="hs-uilib-card-description">{descriptionLimit}</p>

      <a href={link} target={newPage ? "" : "_blank"} className="hs-uilib-card">{btnTitle}</a>
    </div>

  );
};


