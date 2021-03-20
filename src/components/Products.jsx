import React from "react";
import "./products.css";
import pic1 from "../pictures/pic1.png";
import pic2 from "../pictures/pic2.png";
import pic3 from "../pictures/pic3.png";
import pic4 from "../pictures/pic4.png";
import pic5 from "../pictures/pic5.png";

export default function Products() {
  const products = [
    { name: "lame composite", picture: pic1 },
    { name: "lame en bois", picture: pic2 },
    { name: "Panneau bois", picture: pic3 },
    { name: "Grille rigide", picture: pic4 },
    { name: "Gabion", picture: pic5 },
  ];

  return (
    <div className="products">
      {products.map((product, i) => (
        <figure key={i} className="product">
          <img
            src={product.picture}
            alt="Lame Composite"
            className="product__img"
          />
          <figcaption className="product__caption">{product.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
