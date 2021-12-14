import React from "react";
import {
  fireEvent,
  getByAltText,
  render,
  screen,
} from "@testing-library/react";
import Drinks from "../components/Drinks";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Navigate,
} from "react-router-dom";
import ViewFortunes from "../components/FortuneTeller";

test("should return element: button - based on its role", () => {
  const { getByRole } = render(<div role="button" />);
  expect(getByRole("button")).toMatchInlineSnapshot(`
          <div
            role="button"
          />
        `);
});

describe("Drink Img from API check", () => {
  it("Display Drink from api url", () => {
    render(
      <Router>
        <ViewFortunes />
      </Router>
    );
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain(".png");
  });
});
