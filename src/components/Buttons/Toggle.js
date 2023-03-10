import React, { useState } from 'react';
import P from 'prop-types';
export const Toggle = ({ onClick, activeBackground = "#219ebc", disableBackground = "#edede9" }) => {

  const [active, setActive] = useState(false)

  const handleChange = () => {
    return (
      setActive(!active ? true : false),
      onClick()
    )
  }


  return (

    <>

      <div style={{ position: "relative", backgroundColor: `${!active ? disableBackground : activeBackground}`, width: "50px", height: "30px", display: "flex", alignItems: "center", borderRadius: "1000px", transition: "0.3s all" }}>
        <div onClick={handleChange} style={{ width: "20px", height: "20px", backgroundColor: "#fff", borderRadius: "1000px", margin: "0px 5px", position: "absolute", left: `${!active ? "0px" : "20px"}`, cursor: 'pointer', transition: "0.3s all" }}></div>
      </div>

    </>

  );

};

Toggle.propTypes = {
  onClick: P.node,
  activeBackground: P.string,
  disableBackground: P.string,
};
