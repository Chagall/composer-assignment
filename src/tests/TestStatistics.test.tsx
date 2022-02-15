import { render, screen } from "@testing-library/react";
import TextStatistics from "../components/TextStatistics";

it("Expect vowel counters to be in the document", () => {
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
})