import React from "react";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import ComputerImage from "../BackgroundImage/Coffee.jpg";
import Textbox from "../Textbox/Textbox";
import "./UnderConstruction.css";

export default function UnderConstruction({ Page: page }) {
  return (
    <div
      data-testid="under-construction-container"
      className="under-construction-container"
    >
      <BackgroundImage src={`url(${ComputerImage})`}></BackgroundImage>
      <Textbox
        HeaderText="Coming soon!"
        BodyText={`The ${page} page is coming soon. Click the Github icon to go to the repository`}
      />
    </div>
  );
}
