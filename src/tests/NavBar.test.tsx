import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

it("Expect the header and image to be in the document", () => {
  render(<NavBar />);

  const headingElement = screen.getByRole("heading");
  const imageElement = screen.getByRole("img");

  expect(headingElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});

it("Expect the header and image to have the appropriate classes", () => {
  render(<NavBar />);

  const headingElement = screen.getByRole("heading");
  const imageElement = screen.getByRole("img");

  expect(headingElement).toHaveClass("ui header navbarTitle");
  expect(imageElement).toHaveClass("ui small image");
});

it("Expect the header to have the exact text 'Composer'", () => {
  render(<NavBar />);

  const headingElement = screen.getByRole("heading");
  expect(headingElement).toHaveTextContent("Composer");
});