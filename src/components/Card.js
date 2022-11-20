import React from "react";
import "../styles/Card.css";
const Card = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__img" />
      <div className="card__overlay">
        <div className="card__content">
          <i className="fa-solid fa-circle-play card__content-playBtn"></i>
          <p className="card__content-title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
