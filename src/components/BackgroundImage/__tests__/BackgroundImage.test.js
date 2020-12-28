import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import BackgroundImage from "../BackgroundImage";
import ComputerImage from "../Coffee.jpg";

it("Renders without Crashing", () => {
  render(<BackgroundImage src={`url(${ComputerImage})`}></BackgroundImage>);
});

it("Renders with correct styling", () => {
  const { getByTestId } = render(
    <BackgroundImage src={`url(${ComputerImage})`}></BackgroundImage>
  );
  expect(getByTestId("background-image").className).toBe("image");
  expect(getByTestId("background-image")).toHaveStyle(
    `background-image: url(${ComputerImage})`
  );
});

it("Is correct compared to snapshot", () => {
  const tree = renderer
    .create(<BackgroundImage src={`url(${ComputerImage})`}></BackgroundImage>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
