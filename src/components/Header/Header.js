import P from 'prop-types';
import React, { useState } from 'react';
import './Header.css';

export const Header = ({ logo, items, newPage = false, logoImg, bgColor, fontColor = "#fff" }) => {
  const [visible, setVisible] = useState(false)
  return (

    <div style={{ backgroundColor: `${bgColor}`, color: `${fontColor}` }} className='hs-uilib-header-container'>
      <div className='hs-uilib-header-logo' >{!logoImg ? <h1>{logo}</h1> : <img className="hs-uilib-header-logo-img" src={logo} />} </div>
      <div >
        <div className='hs-uilib-header-menu'>
          {items.map(i => {
            return (
              <a style={{ color: `${fontColor}` }} className='hs-uilib-header-menu-links' target={!newPage ? "" : "_blank"} href={i.links}>{i.item}</a>
            )
          })}
        </div>

      </div>
      <svg className='hs-uilib-header-hamburger-menu' onClick={() => setVisible(true)} style={{ cursor: "pointer" }} viewBox="0 0 100 80" width="40" height="40">
        <rect rx="5" fill={fontColor} width="100" height="10"></rect>
        <rect rx="5" fill={fontColor} y="30" width="100" height="10"></rect>
        <rect rx="5" fill={fontColor} y="60" width="100" height="10"></rect>
      </svg>
      <div style={{ display: `${visible ? "flex" : "none"}`, backgroundColor: `${bgColor}` }} className='hs-uilib-header-menu-mobile'>
        <button style={{ color: `${fontColor}` }} className='hs-uilib-header-close-menu' onClick={() => setVisible(false)}>x</button>
        {items.map(i => {
          return (
            <a style={{ color: `${fontColor}` }} className='hs-uilib-header-menu-links-mobile' target={!newPage ? "" : "_blank"} href={i.links}>{i.item}</a>
          )
        })}
      </div>
    </div>

  );
};

Header.propTypes = {
  logo: P.node.isRequired,
  items: P.array,
  newPage: P.bool
};
