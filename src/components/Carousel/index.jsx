/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import arrowPrev from "../../assets/Arrow_Back.png";
import arrowNext from "../../assets/Arrow_Forward.png";

export default function Carousel({ arrayImg }) {
  const length = arrayImg.length - 1;
  const [picture, updatePicture] = useState(0);
  var isMany = Boolean(false);
  if (arrayImg.length < 2) {
    isMany = false;
  } else {
    isMany = true;
  }

  return isMany ? (
    <figure className="carousel">
      <img
        className="carousel__img"
        src={arrayImg[picture]}
        alt="photographie du logement"
      ></img>
      <img
        className="carousel__arrow carousel__arrow--prev"
        src={arrowPrev}
        alt="flèche pour afficher l'image précédente"
        onClick={() => {
          if (picture === 0) {
            updatePicture(picture + length);
          } else {
            updatePicture(picture - 1);
          }
        }}
      ></img>
      <img
        className="carousel__arrow carousel__arrow--next"
        src={arrowNext}
        alt="flèche pour afficher l'image suivante"
        onClick={() => {
          if (picture > length - 1) {
            updatePicture(0);
          } else {
            updatePicture(picture + 1);
          }
        }}
      ></img>
      <p className="carousel__state">
        {picture + 1}/{arrayImg.length}
      </p>
    </figure>
  ) : (
    <img
      className="carousel__img"
      src={arrayImg[0]}
      alt="photographie du logement"
    ></img>
  );
}
