import React from "react";
import "./Configuration.css";
import fence from "../pictures/fence.png";
import { ReactComponent as E } from "../pictures/E.svg";

export default function Configuration() {
  return (
    <div className="Configuration">
      <E className="Configuration__E" />
      <img src={fence} alt="" className="Configuration__fence" />
      <div className="Configuration__content">
        <h1 className="Configuration__title">Configurer votre espace</h1>
        <span className="Configuration__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          cumque quis maiores dolor qui suscipit veritatis ad quasi praesentium
          .
        </span>
      </div>
      <span className="Configuration__leftArrow"> &#8594;</span>
    </div>
  );
}
