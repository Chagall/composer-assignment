import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Composer from "../components/Composer";
import store from "../store";

describe("Textbox tests", () => {
  it("Expect editable textbox, to be in the document", () => {
    render(
      <Provider store={store}>
        <Composer />
      </Provider>
    );

    const textboxElement = screen.getByRole("textbox");
    expect(textboxElement).toBeInTheDocument();
  });

  it("Expect initial state texts to be in the document", () => {
    render(
      <Provider store={store}>
        <Composer />
      </Provider>
    );

    const text1 = screen.getByText("This is editable");
    const text2 = screen.getByText("rich");
    const text3 = screen.getByText("text,");
    const text4 = screen.getByText("much");
    const text5 = screen.getByText("better than a");
    const text6 = screen.getByText("<textarea>");
    const text7 = screen.getByText("!");

    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(text3).toBeInTheDocument();
    expect(text4).toBeInTheDocument();
    expect(text5).toBeInTheDocument();
    expect(text6).toBeInTheDocument();
    expect(text7).toBeInTheDocument();

  });

  it("Expect editable textbox to have certain properties", () => {
    render(
      <Provider store={store}>
        <Composer />
      </Provider>
    );

    const textboxElement = screen.getByRole("textbox");

    expect(textboxElement).toHaveClass("editable");
    expect(textboxElement).toHaveAttribute("spellcheck", "false");
    expect(textboxElement).toHaveAttribute("data-slate-editor", "true");
    expect(textboxElement).toHaveAttribute("data-slate-node", "value");
    expect(textboxElement).toHaveAttribute("contenteditable", "true");
  });
});

// The click tests fire a warning, but they work
// When you follow the warning instructions the warnings still don't go away
// This is probably because of some side effects with the Popper.js library
// that is used tho show the tooltip when you pass the mouse over the buttons
describe("Button group tests", () => {
  it("Expect button group buttons to be in the document", () => {
    render(
      <Provider store={store}>
        <Composer />
      </Provider>
    );

    const alignLeftButtonElement = screen.getByTestId("align-left-button");
    const alignCenterByttonElement = screen.getByTestId("align-center-button");
    const alignRightButtonElement = screen.getByTestId("align-right-button");
    const justifyElement = screen.getByTestId("justify-button");
    const boldButtonElement = screen.getByTestId("bold-button");
    const underlineButtonElement = screen.getByTestId("underline-button");
    const codeButtonElement = screen.getByTestId("code-button");

    expect(alignLeftButtonElement).toBeInTheDocument();
    expect(alignCenterByttonElement).toBeInTheDocument();
    expect(alignRightButtonElement).toBeInTheDocument();
    expect(justifyElement).toBeInTheDocument();
    expect(boldButtonElement).toBeInTheDocument();
    expect(underlineButtonElement).toBeInTheDocument();
    expect(codeButtonElement).toBeInTheDocument();
  });

  it("Expect align left button to be active when clicked", () => {
    render(
      <Provider store={store}>
        <Composer />
      </Provider>
    );

    const alignLeftButtonElement = screen.getByTestId("align-left-button");
    fireEvent.click(alignLeftButtonElement);
    // act(() => { alignLeftButtonElement.dispatchEvent(new MouseEvent('click', {bubbles: true})); });
    expect(alignLeftButtonElement).toHaveClass("active");
  });

  it("Expect align center button to be active when clicked", () => {
    render(
      <Provider store={store}>
        <Composer />
      </Provider>
    );
    const alignCenterButtonElement = screen.getByTestId("align-center-button");
    fireEvent.click(alignCenterButtonElement);
    // act(() => { alignCenterButtonElement.dispatchEvent(new MouseEvent('click', {bubbles: true})); });
    expect(alignCenterButtonElement).toHaveClass("active");
  });

  it("Expect align right button to be active when clicked", () => {
    render(
      <Provider store={store}>
        <Composer />
      </Provider>
    );

    const alignRightButtonElement = screen.getByTestId("align-right-button");
    fireEvent.click(alignRightButtonElement);
    // act(() => { alignRightButtonElement.dispatchEvent(new MouseEvent('click', {bubbles: true})); });
    expect(alignRightButtonElement).toHaveClass("active");
  });

  it("Expect justify button to be active when clicked", () => {
    render(
      <Provider store={store}>
        <Composer />
      </Provider>
    );
    const justifyButtonElement = screen.getByTestId("justify-button");
    fireEvent.click(justifyButtonElement);
    // act(() => { justifyButtonElement.dispatchEvent(new MouseEvent('click', {bubbles: true})); });
    expect(justifyButtonElement).toHaveClass("active");
  });
});