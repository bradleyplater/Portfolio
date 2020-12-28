import react from "react";
import { getByText, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import TextBox from "../Textbox";

describe("Multiple tests to check the rendering of the element", () => {
  it("Renders without Crashing", () => {
    render(<TextBox HeaderText="Test Header" BodyText="Test Body"></TextBox>);
  });

  it("Renders with correct styling", () => {
    const { getByTestId } = render(
      <TextBox HeaderText="Test Header" BodyText="Test Body"></TextBox>
    );

    expect(getByTestId("textbox-container")).toHaveClass("textbox-container");
    expect(getByTestId("textbox-border")).toHaveClass("textbox-border");
  });

  it("Renders with all elements", () => {
    const { getByTestId } = render(
      <TextBox HeaderText="Test Header" BodyText="Test Body"></TextBox>
    );

    getByTestId("textbox-container");
    getByTestId("textbox-border");
    getByTestId("header-text");
    getByTestId("body-text");
    getByTestId("github-button-link");
    getByTestId("github-button-icon");
  });
});

describe("Multiple tests to check the header text correct gets shown", () => {
  it("Shows Header text - Test Header", () => {
    const { getByText } = render(
      <TextBox HeaderText="Test Header" BodyText="Test Body"></TextBox>
    );
    getByText("Test Header");
  });
  it("Shows Header text - This is a Header", () => {
    const { getByText } = render(
      <TextBox HeaderText="This is a Header" BodyText="Test Body"></TextBox>
    );
    getByText("This is a Header");
  });
  it("Shows Header text - I am a Header", () => {
    const { getByText } = render(
      <TextBox HeaderText="I am a Header" BodyText="Test Body"></TextBox>
    );
    getByText("I am a Header");
  });
});

describe("Multiple tests to check the body text correct gets shown", () => {
  it("Shows Body text - Test Body", () => {
    const { getByText } = render(
      <TextBox HeaderText="Header" BodyText="Test Body"></TextBox>
    );
    getByText("Test Body");
  });
  it("Shows Body text - This is a Body", () => {
    const { getByText } = render(
      <TextBox HeaderText="Header" BodyText="This is a Body"></TextBox>
    );
    getByText("This is a Body");
  });
  it("Shows Body text - I am a Body", () => {
    const { getByText } = render(
      <TextBox HeaderText="Header" BodyText="I am a Body"></TextBox>
    );
    getByText("I am a Body");
  });
});

describe("Multiple tests to check against snapshot ", () => {
  it("Different Header/Body - ", () => {
    const tree = renderer
      .create(<TextBox HeaderText="Test Header" BodyText="Test Body"></TextBox>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Different Header/Body - ", () => {
    const tree = renderer
      .create(<TextBox HeaderText="Header" BodyText="Body"></TextBox>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Different Header/Body - ", () => {
    const tree = renderer
      .create(<TextBox HeaderText="Test " BodyText="Test "></TextBox>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Different Header/Body - ", () => {
    const tree = renderer
      .create(
        <TextBox
          HeaderText="I am Test Header"
          BodyText="I am Test Body"
        ></TextBox>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
