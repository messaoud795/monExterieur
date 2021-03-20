import React, { useEffect } from "react";
import { loadBois } from "../actions/bois_action";
import { useDispatch, useSelector } from "react-redux";
import "./Bois.css";

export default function Bois() {
  const dispatch = useDispatch();
  //get bois state from redux
  const { loadingBois, products } = useSelector((state) => state.bois);

  //dispatch an action to load data from API
  useEffect(() => {
    dispatch(loadBois());
  }, [dispatch]);

  return (
    <div className="bois">
      <div className="bois__header">
        <span>Nouveautés</span>
        <span>Populaire</span>
        <span>Meilleures Ventes</span>
      </div>

      {/* loader while return and bois_cards after getting data */}

      <div className="bois__cards">
        {loadingBois ? (
          <div className="loader"></div>
        ) : (
          <div>
            <div className="bois__cards">
              {products?.map((product) => (
                <div className="bois__card " key={product.id}>
                  <img
                    src={product.picture}
                    alt=" bois"
                    className="bois__Card-img"
                  />
                  <span className="bois__Card-name">
                    {product.product_name}
                  </span>
                  <span className="bois__Card-price">{product.price}</span>
                  <div className="bois__Card-details">
                    <span>Voir détails</span>
                    <span> &#8594;</span>
                  </div>
                </div>
              ))}{" "}
            </div>
            <button className="bois__cards-btn">Afficher plus </button>
          </div>
        )}
      </div>
    </div>
  );
}
