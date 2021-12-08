import React from "react";
import { fireEvent, getByAltText, render, screen } from "@testing-library/react";
import Home from "./Home";
import App from "../App";

describe("ToggleComponent", () => {
  it("Should be true", () => {
    const test = true;
    expect(test).toBe(true);
  });
});

expect(getByTestId("background")).toHaveStyle(
  `background-image: url(${props.image})`
);

test("renders learn react link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/fortunes/i);
  expect(linkElement).toBeInTheDocument();
});

test("render title of page", () => {
  render(<Home />);
  const header = screen.queryByText("Fortunes");
  expect(header).toBeInTheDocument();
});

describe("Alt Text: Fortune", () => {
  it("Display Fortune alt text", () => {
    const { getByAltText } = render(<Home />);
    getByAltText("fortune-teller link"); // throws an expception if the element cannot be found
  });
});

describe("Alt Text: Bar", () => {
  it("Display Bar alt text", () => {
    const { getByAltText } = render(<Home />);
    getByAltText("bar link"); // throws an expception if the element cannot be found
  });
});

describe("Bar Image Check", () => {
  it("Display Neon Drink Sign", () => {
    render(<Home />);
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("neondrink");
  });
});
//
/* test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
 */
