import { RenderElementProps } from "slate-react";
import { CustomRenderLeafProps } from "./custom-types";

export const countMatches = (text: string, type: string): number => {
  let matches: RegExpMatchArray | null;

  switch (type) {
    case "vowels":
      // Regular expression to count the number of vowels in the text
      matches = text.match(/[aeiou]/gi);
      break;
    case "consonants":
      // Regular expression to count the number of consonants in the text
      matches = text.match(/[bcdfghjklmnpqrstvwyxz]/gi);
      break;
    case "words":
      // Regular expression to count the number of words in the text
      matches = text.match(/(\w+)/g);
      break;
    default:
      matches = null;
  }

  // Return 0 if no matches were found, or the amount of matches
  return matches === null ? 0 : matches.length;
}

export const HOTKEYS: Record<string,string> = {
  "mod+1": "left",
  "mod+2": "center",
  "mod+3": "right",
  "mod+4": "justify"
};

export const Element = ({ attributes, children }: RenderElementProps) => {
  return <p {...attributes}>{children}</p>;
};

export const Leaf = ({ attributes, children, leaf }: CustomRenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}