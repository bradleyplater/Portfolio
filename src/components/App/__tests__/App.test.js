import react from "react";
import { fireEvent, getByText, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import App from "../App";

describe("Multiple tests to check the rendering of the element", () => {
  it("Renders without Crashing", () => {
    render(<App />);
  });

  it("Renders with all elements", () => {
    const { getByTestId, getByText } = render(<App />);

    getByText("Home");
    getByText("Skills");
    getByText("Me");
    getByText("Contact");
    getByTestId("textbox-container");
    getByTestId("textbox-border");
    getByTestId("header-text");
    getByTestId("body-text");
    getByTestId("github-button-link");
    getByTestId("github-button-icon");
  });
});

describe("Multiple tests to check correct text is shown depending which page is active", () => {
  it("Home is shown when user navigates to Home", () => {
    global.Window = { location: { pathname: "/Home" } };

    const { getByText } = render(<App />);

    const HomeButton = getByText("Home");
    fireEvent.click(HomeButton);
    expect(global.window.location.pathname).toEqual("/Home");
    getByText(
      "The Home page is coming soon. Click the Github icon to go to the repository"
    );
  });

  it("Skills is shown when user navigates to Skills", () => {
    global.Window = { location: { pathname: "/Home" } };

    const { getByText } = render(<App />);

    const SkillsButton = getByText("Skills");
    fireEvent.click(SkillsButton);
    expect(global.window.location.pathname).toEqual("/Skills");
    getByText(
      "The Skills page is coming soon. Click the Github icon to go to the repository"
    );
  });
  it("Me is shown when user navigates to Me", () => {
    global.Window = { location: { pathname: "/Home" } };

    const { getByText } = render(<App />);

    const MeButton = getByText("Me");
    fireEvent.click(MeButton);
    expect(global.window.location.pathname).toEqual("/Me");
    getByText(
      "The Me page is coming soon. Click the Github icon to go to the repository"
    );
  });

  it("Contact is shown when user navigates to Contact", () => {
    global.Window = { location: { pathname: "/Home" } };

    const { getByText } = render(<App />);

    const ContactButton = getByText("Contact");
    fireEvent.click(ContactButton);
    expect(global.window.location.pathname).toEqual("/Contact");
    getByText(
      "The Contact page is coming soon. Click the Github icon to go to the repository"
    );
  });
});

describe("Test against snapshot ", () => {
  it("App", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
