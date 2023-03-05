import React from 'react';

export const Button = ({ children, backgroundColor = "#219ebc", handleClick }) => {
  return (

    <button onClick={handleClick} style={{ width: "auto", height: "50px", borderRadius: "1000px", border: "none", backgroundColor: backgroundColor, color: "#fff", fontSize: "25px", padding: "0px 30px 0px 30px", textAlign: "center", cursor: "pointer" }}>{children}</button>

  );
};