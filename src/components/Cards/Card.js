import P from 'prop-types';
import React from 'react';
import "./Card.css"
export const Card = ({ title, description, image, alt }) => {
  return (

    <div className="hs-uilib-card-container">
      <img src={image} alt={alt} className="hs-uilib-card-img" />
      <h3 className="hs-uilib-card-title">{title}</h3>
      <p className="hs-uilib-card-descrption">{description}</p>
    </div>

  );
};

Card.propTypes = {
  children: P.node.isRequired,
};
