import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn to code link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn to code/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders link to stephen grider", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/docker and kubernentes/i);
  expect(linkElement).toBeInTheDocument();
});
