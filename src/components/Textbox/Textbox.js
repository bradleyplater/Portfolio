import React from "react";
import "./Textbox.css";
import GithubButton from "../GithubButton/GithubButton";

export default function Textbox({ HeaderText, BodyText }) {
  return (
    <div data-testid="textbox-container" className="textbox-container">
      <div data-testid="textbox-border" className="textbox-border">
        <h1 data-testid="header-text">{HeaderText}</h1>
        <p data-testid="body-text">{BodyText}</p>
        <GithubButton></GithubButton>
      </div>
    </div>
  );
}
