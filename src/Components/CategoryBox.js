import React, { useState } from "react";
import "../Styles/CategoryBox.css";

function CategoryBox(props) {
  return (
    <>
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              className={`nav-link ${
                props.category === "general" ? "active" : ""
              }`}
              aria-current="page"
              href="/"
            >
              Today Headlines
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                props.category === "technology" ? "active" : ""
              }`}
              href="/technology"
            >
              Technology
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                props.category === "bussiness" ? "active" : ""
              }`}
              href="/bussiness"
            >
              Bussiness
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                props.category === "sports" ? "active" : ""
              }`}
              href="/sports"
            >
              Sports
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CategoryBox;
