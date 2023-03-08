import P from 'prop-types';
import React from 'react';
import "./Card.css"
export const Card = ({ title, description, image, alt, btnTitle, link, newPage }) => {
  return (

    <div className="hs-uilib-card-container">
      <img src={image} alt={alt} className="hs-uilib-card-img" />
      <div className="hs-uilib-card-text">
        <h3 className="hs-uilib-card-title">{title}</h3>
        <hr />
        <p className="hs-uilib-card-descrption">{description}</p>
      </div>
      <a href={link} target={newPage ? "" : "_blank"} className="hs-uilib-card">{btnTitle}</a>
    </div>

  );
};

Card.propTypes = {
  children: P.node.isRequired,
};
