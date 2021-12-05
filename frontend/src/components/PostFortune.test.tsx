import React from "react";
import { render } from "@testing-library/react";
import PostFortunes from "./PostFortune";

test("should return element: button - based on its role", () => {
  const { getByRole } = render(<div role="button" />);
  expect(getByRole("button")).toMatchInlineSnapshot(`
        <div
          role="button"
        />
      `);
});
