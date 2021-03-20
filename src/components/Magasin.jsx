import React from "react";
import "./Magasin.css";
import pic12 from "../pictures/pic12.png";
import pic13 from "../pictures/pic13.png";

export default function Magasin() {
  return (
    <div className="Magasin">
      <img src={pic12} alt="" className="Magasin__img" />
      <div className="Magasin__description">
        <h2 className="Magasin__description-title">Notre magasin</h2>
        <img src={pic13} alt="" className="Magasin__description-img" />
        <span className="Magasin__description-para">
          Dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </span>
      </div>
    </div>
  );
}
