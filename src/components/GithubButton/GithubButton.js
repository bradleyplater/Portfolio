import { React } from "react";
import { FaGithub } from "react-icons/fa";
import "./GithubButton.css";

export default function GithubButton() {
  return (
    <a
      data-testid="github-button-link"
      href="https://github.com/bradleyplater/Portfolio"
      target="_blank"
      rel="noopener noreferrer"
      className="link"
    >
      <FaGithub
        data-testid="github-button-icon"
        className="github-icon"
      ></FaGithub>
    </a>
  );
}
