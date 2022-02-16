import { render, screen } from "@testing-library/react";
import TextStatistics from "../components/TextStatistics";

describe("Text statistics tests", () => {
  it("Expect text statistics to be in the document", () => {
    render(
      <TextStatistics
        vowels={1}
        consonants={2}
        words={9}
        digits={18}
      />
    );
  
    const numberOfVowelsElement = screen.getByText("1");
    const numberOfConsonantsElement = screen.getByText("2");
    const numberOfWordsElement = screen.getByText("9");
    const numberOfDigitsElement = screen.getByText("18");
  
    expect(numberOfVowelsElement).toBeInTheDocument();
    expect(numberOfConsonantsElement).toBeInTheDocument();
    expect(numberOfWordsElement).toBeInTheDocument();
    expect(numberOfDigitsElement).toBeInTheDocument();
  });
  
  it("Expect text statistics to have value class", () => {
    render(
      <TextStatistics
        vowels={1}
        consonants={2}
        words={9}
        digits={18}
      />
    );
  
    const numberOfVowelsElement = screen.getByText("1");
    const numberOfConsonantsElement = screen.getByText("2");
    const numberOfWordsElement = screen.getByText("9");
    const numberOfDigitsElement = screen.getByText("18");
  
    expect(numberOfVowelsElement).toHaveClass("value");
    expect(numberOfConsonantsElement).toHaveClass("value");
    expect(numberOfWordsElement).toHaveClass("value");
    expect(numberOfDigitsElement).toHaveClass("value");
  });
  
  it("Expect text statistics text content to match passed props", () => {
    render(
      <TextStatistics
        vowels={1}
        consonants={2}
        words={9}
        digits={18}
      />
    );
  
    const numberOfVowelsElement = screen.getByText("1");
    const numberOfConsonantsElement = screen.getByText("2");
    const numberOfWordsElement = screen.getByText("9");
    const numberOfDigitsElement = screen.getByText("18");
  
    expect(numberOfVowelsElement).toHaveTextContent("1");
    expect(numberOfConsonantsElement).toHaveTextContent("2");
    expect(numberOfWordsElement).toHaveTextContent("9");
    expect(numberOfDigitsElement).toHaveTextContent("18");
  });
});
