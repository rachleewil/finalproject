import React from "react";
import {
  fireEvent,
  getByAltText,
  render,
  screen,
} from "@testing-library/react";
import Home from "../components/Home";
import App from "../App";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Navigate,
} from "react-router-dom";
import NavBar from "../components/NavBar";

describe("ToggleComponent", () => {
  it("Should be true", () => {
    const test = true;
    expect(test).toBe(true);
  });
});

/* expect(getByTestId("background")).toHaveStyle(
  `background-image: url(${props.image})`
); */

test("renders NavBar create fortune link", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  const linkElement = screen.getByText("Create Fortune");
  expect(linkElement).toBeInTheDocument();
});

test("render title of page", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const header = screen.queryByText("Welcome to the Carnival!");
  expect(header).toBeInTheDocument();
});

describe("Alt Text: Fortune", () => {
  it("Display Fortune alt text", () => {
    const { getByAltText } = render(
      <Router>
        <Home />
      </Router>
    );
    getByAltText("fortune-teller"); // throws an expception if the element cannot be found
  });
});

describe("Alt Text: Bar", () => {
  it("Display Bar alt text", () => {
    const { getByAltText } = render(
      <Router>
        <Home />
      </Router>
    );
    getByAltText("bar"); // throws an expception if the element cannot be found
  });
});

describe("Bar Image Check", () => {
  it("Display Neon Drink Sign", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("neondrink.jpg");
  });
});
//
/* test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
 */
