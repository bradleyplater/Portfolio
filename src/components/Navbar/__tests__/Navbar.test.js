import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Navbar from "./../Navbar";

it("Renders without Crashing", () => {
  render(
    <Router>
      <Navbar></Navbar>
    </Router>
  );
});

it("Renders with correct text", () => {
  const { getByText } = render(
    <Router>
      <Navbar></Navbar>
    </Router>
  );

  getByText("Home");
  getByText("Skills");
  getByText("Me");
  getByText("Contact");
});

it("Renders with correct button styling", () => {
  const { getByText } = render(
    <Router>
      <Navbar></Navbar>
    </Router>
  );
  expect(getByText("Home")).toHaveClass("navbar-link");
  expect(getByText("Skills")).toHaveClass("navbar-link");
  expect(getByText("Me")).toHaveClass("navbar-link");
  expect(getByText("Contact")).toHaveClass("navbar-link");
});

it("Changes 'selected' className when clicking 'Skills' Button", () => {
  const { getByText } = render(
    <Router>
      <Navbar></Navbar>
    </Router>
  );

  const SkillsButton = getByText("Skills");
  const HomeButton = getByText("Home");

  fireEvent.click(SkillsButton);

  expect(SkillsButton).toHaveClass("selected");
  expect(HomeButton).not.toHaveClass("selected");
});

it("Changes 'selected' className when clicking 'Me' Button", () => {
  const { getByText } = render(
    <Router>
      <Navbar></Navbar>
    </Router>
  );

  const MeButton = getByText("Me");
  const HomeButton = getByText("Home");

  fireEvent.click(MeButton);

  expect(MeButton).toHaveClass("selected");
  expect(HomeButton).not.toHaveClass("selected");
});

it("Changes 'selected' className when clicking 'Contact' Button", () => {
  const { getByText } = render(
    <Router>
      <Navbar></Navbar>
    </Router>
  );

  const ContactButton = getByText("Contact");
  const HomeButton = getByText("Home");

  fireEvent.click(ContactButton);

  expect(ContactButton).toHaveClass("selected");
  expect(HomeButton).not.toHaveClass("selected");
});

it("Sends to correct path once 'Home' button is clicked", () => {
  global.Window = { location: { pathname: null } };

  const { getByText } = render(
    <Router>
      <Navbar></Navbar>
    </Router>
  );
  const HomeButton = getByText("Home");
  fireEvent.click(HomeButton);
  expect(global.window.location.pathname).toEqual("/Home");
});

it("Sends to correct path once 'Skills' button is clicked", () => {
  global.Window = { location: { pathname: null } };

  const { getByText } = render(
    <Router>
      <Navbar></Navbar>
    </Router>
  );
  const SkillsButton = getByText("Skills");
  fireEvent.click(SkillsButton);
  expect(global.window.location.pathname).toEqual("/Skills");
});

it("Sends to correct path once 'Me' button is clicked", () => {
  global.Window = { location: { pathname: null } };

  const { getByText } = render(
    <Router>
      <Navbar></Navbar>
    </Router>
  );
  const MeButton = getByText("Me");
  fireEvent.click(MeButton);
  expect(global.window.location.pathname).toEqual("/Me");
});

it("Sends to correct path once 'Contact' button is clicked", () => {
  global.Window = { location: { pathname: null } };

  const { getByText } = render(
    <Router>
      <Navbar></Navbar>
    </Router>
  );
  const ContactButton = getByText("Contact");
  fireEvent.click(ContactButton);
  expect(global.window.location.pathname).toEqual("/Contact");
});

it("Is correct compared to snapshot", () => {
  const tree = renderer
    .create(
      <Router>
        <Navbar />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
