import React from "react";
import "./Footer.css";
import logo from "../pictures/logo.JPG";
import { ReactComponent as Time } from "../pictures/time.svg";

export default function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="" className="footer__img" />
      <div className="footer__lien">
        <h3 className="footer__title">Lien Utiles</h3>
        <p className="footer-item">Configurateur</p>
        <p>Notre magasin</p>
        <p>Notice et installation</p>
        <p>Livrasion Transport</p>
      </div>
      <div className="footer__contact">
        <h3 className="footer__title">Nous Contacter</h3>
        <p className="footer__subtitle">Adress</p>
        <p>3 rue du champ de verger Allonnes, Pays de la Loire, France</p>
        <p className="footer__subtitle">Telephone</p>
        <p>+33 2 43 57 00 87</p>
      </div>
      <div className="footer__horaire">
        <h3 className="footer__title">Horaires</h3>
        <p className="footer__subtitle">Lundi et Vendredi</p>
        <div className="footer__time">
          <Time className="footer__clock"></Time>
          <p>07:30 - 12:00</p>
        </div>
        <div className="footer__time">
          <Time className="footer__clock"></Time>
          <p>13:30 - 18:00</p>
        </div>
        <p className="footer__subtitle" id="samedi">
          Samedi
        </p>
        <p> ( Fermé les samedis de janvier et février)</p>
        <div className="footer__time">
          <Time className="footer__clock"></Time>
          <p>09:00 - 12:00</p>
        </div>
      </div>
    </div>
  );
}
