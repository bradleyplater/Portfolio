import react from "react";
import { getByText, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import UnderConstruction from "../UnderConstruction";

describe("Multiple tests to check the rendering of the element", () => {
  it("Renders without Crashing", () => {
    render(<UnderConstruction Page="Home"></UnderConstruction>);
  });

  it("Renders with correct styling", () => {
    const { getByTestId } = render(
      <UnderConstruction Page="Home"></UnderConstruction>
    );

    expect(getByTestId("under-construction-container")).toHaveClass(
      "under-construction-container"
    );
  });

  it("Renders with all elements", () => {
    const { getByTestId } = render(
      <UnderConstruction Page="Home"></UnderConstruction>
    );

    getByTestId("background-image");
    getByTestId("textbox-container");
    getByTestId("textbox-border");
    getByTestId("header-text");
    getByTestId("body-text");
    getByTestId("github-button-link");
    getByTestId("github-button-icon");
  });
});

describe("Multiple tests to check the rendering of the element", () => {
  it("Renders without Crashing", () => {
    render(<UnderConstruction Page="Home"></UnderConstruction>);
  });

  it("Renders with correct styling", () => {
    const { getByTestId } = render(
      <UnderConstruction Page="Home"></UnderConstruction>
    );

    expect(getByTestId("under-construction-container")).toHaveClass(
      "under-construction-container"
    );
  });

  it("Renders with all elements", () => {
    const { getByTestId } = render(
      <UnderConstruction Page="Home"></UnderConstruction>
    );

    getByTestId("background-image");
    getByTestId("textbox-container");
    getByTestId("textbox-border");
    getByTestId("header-text");
    getByTestId("body-text");
    getByTestId("github-button-link");
    getByTestId("github-button-icon");
  });
});

describe("Multiple tests to check the text the users sees", () => {
  it("Home is shown when page = 'Home'", () => {
    const { getByText } = render(
      <UnderConstruction Page="Home"></UnderConstruction>
    );
    getByText(
      "The Home page is coming soon. Click the Github icon to go to the repository"
    );
  });

  it("Me is shown when page = 'Me'", () => {
    const { getByText } = render(
      <UnderConstruction Page="Me"></UnderConstruction>
    );
    getByText(
      "The Me page is coming soon. Click the Github icon to go to the repository"
    );
  });

  it("Skills is shown when page = 'Skills'", () => {
    const { getByText } = render(
      <UnderConstruction Page="Skills"></UnderConstruction>
    );
    getByText(
      "The Skills page is coming soon. Click the Github icon to go to the repository"
    );
  });

  it("Contact is shwon when page = 'Contact'", () => {
    const { getByText } = render(
      <UnderConstruction Page="Contact"></UnderConstruction>
    );

    getByText(
      "The Contact page is coming soon. Click the Github icon to go to the repository"
    );
  });
});

describe("Multiple tests to check against snapshot ", () => {
  it("Home", () => {
    const tree = renderer
      .create(<UnderConstruction Page="Home"></UnderConstruction>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Me", () => {
    const tree = renderer
      .create(<UnderConstruction Page="Me"></UnderConstruction>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Contact", () => {
    const tree = renderer
      .create(<UnderConstruction Page="Contact"></UnderConstruction>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Skills", () => {
    const tree = renderer
      .create(<UnderConstruction Page="Skills"></UnderConstruction>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
