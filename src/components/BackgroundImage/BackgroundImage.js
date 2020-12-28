import React from "react";
import "./BackgroundImage.css";

export default function BackgroundImage({ src }) {
  return (
    <div
      className="image"
      data-testid="background-image"
      style={{ backgroundImage: src }}
    ></div>
  );
}
