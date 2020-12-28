import react from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import GithubButton from "../GithubButton";

it("Renders without Crashing", () => {
  render(<GithubButton></GithubButton>);
});

it("Renders link with correct styling", () => {
  const { getByTestId } = render(<GithubButton></GithubButton>);
  expect(getByTestId("github-button-link").className).toBe("link");
});
it("Renders link with correct attributes ", () => {
  const { getByTestId } = render(<GithubButton></GithubButton>);
  expect(getByTestId("github-button-link")).toHaveAttribute(
    "href",
    "https://github.com/bradleyplater/Portfolio"
  );
  expect(getByTestId("github-button-link")).toHaveAttribute("target", "_blank");
  expect(getByTestId("github-button-link")).toHaveAttribute(
    "rel",
    "noopener noreferrer"
  );
});

it("Renders link with correct styling ", () => {
  const { getByTestId } = render(<GithubButton></GithubButton>);
  expect(getByTestId("github-button-icon")).toHaveClass("github-icon");
});

it("Is correct compared to snapshot", () => {
  const tree = renderer.create(<GithubButton></GithubButton>).toJSON();
  expect(tree).toMatchSnapshot();
});
