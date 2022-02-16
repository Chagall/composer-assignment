import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

describe("Header tests", () => {
  it("Expect the header to be in the document", () => {
    render(<NavBar />);
  
    const headingElement = screen.getByRole("heading");  
    expect(headingElement).toBeInTheDocument();
  });

  it("Expect the header to have the appropriate classe", () => {
    render(<NavBar />);
  
    const headingElement = screen.getByRole("heading");  
    expect(headingElement).toHaveClass("ui header navbarTitle");
  });

  it("Expect the header to have the exact text 'Composer'", () => {
    render(<NavBar />);
  
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("Composer");
  });
});

describe("Image tests", () => {
  it("Expect the image to be in the document", () => {
    render(<NavBar />);
  
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });
  
  it("Expect the image to have the appropriate classes", () => {
    render(<NavBar />);
  
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveClass("ui small image");
  });
});