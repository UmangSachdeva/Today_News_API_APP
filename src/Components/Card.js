import React from "react";
import image from "../Resource/NEWS.webp";
import "../Styles/Card.css";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${
              props.image === null ? image : props.image
            })`,
          }}
        ></div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href={props.url} className="btn btn-custom-subscribe rounded-pill">
            View More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
