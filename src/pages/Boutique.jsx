import React from "react";
import Bois from "../components/Bois";
import Categories from "../components/Categories";
import "./Boutique.css";

export default function Boutique() {
  return (
    <div className="boutique">
      <div className="boutique__index">
        <h1 className="boutique__index-title">Nos Produits</h1>
        <p className="boutique__index-texte">Accueil &gt; Boutique</p>
      </div>
      <div className="boutique__bois">
        <Categories />
        <Bois />
      </div>
    </div>
  );
}
