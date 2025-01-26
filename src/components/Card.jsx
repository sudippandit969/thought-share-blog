import React from "react";
import "./Card.css";

function Card({ product }) {
  return (
    <div className="card-container">
      <div className="banner">
        <img src={product.img_url} alt="Banner" />
      </div>
      <div className="description">
        <h2>{product.heading}</h2>
        <p>{product.description}</p>
        <p>posted {product.time} month ago</p>
      </div>
    </div>
  );
}

export default Card;
