import React from "react";
import Configuration from "../components/Configuration";
import Installation from "../components/Installation";
import Magasin from "../components/Magasin";
import Products from "../components/Products";
import Realisations from "../components/Realisations";
import backyard from "../pictures/backyard.png";
import "./Accueil.css";

export default function Accueil() {
  return (
    <div className="Accueil">
      <img src={backyard} alt="" className="Accueil__img" />
      <Products />
      <Configuration />
      <Realisations />
      <Installation />
      <Magasin />
    </div>
  );
}
