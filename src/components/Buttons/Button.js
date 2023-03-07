import React from 'react';

export const Button = ({ title, backgroundColor = "#219ebc", handleClick }) => {
  return (

    <button onClick={handleClick} style={{ width: "auto", height: "50px", borderRadius: "10px", border: "none", backgroundColor: backgroundColor, color: "#fff", fontSize: "25px", padding: "0px 30px 0px 30px", textAlign: "center", cursor: "pointer" }}>{title}</button>

  );
};