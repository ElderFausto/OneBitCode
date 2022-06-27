import React from "react";
import GrayImg from 

const Description = (props) => {
  return (
    <>
      <p>{props.description}</p>
      <a href={props.link}>{props.link}</a>
    </>
  )
}

export default Description;