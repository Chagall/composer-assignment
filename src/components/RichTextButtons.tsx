import { Button, Popup } from "semantic-ui-react";
import {
  alignLeftAction,
  alignCenterAction,
  alignRightAction,
  justifyAction
} from "../actions/Actions";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { CustomEditor } from "../utils/custom-types";
import { Editor } from "slate";
import "../css/RichTextButtons.css"

const RichTextButtons = (props: AnyAction) => {

  const editor = props.editor();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, which: string) => {
    switch (which) {
      case "left":
        props.onAlignLeft();
        break;
      case "center":
        props.onAlignCenter();
        break;
      case "right":
        props.onAlignRight();
        break;
      case "justify":
        props.onJustify();
        break;
      case "bold":
        toggleMark(editor, "bold")
        break;
      case "italic":
        toggleMark(editor, "italic")
        break;
      case "underline":
        toggleMark(editor, "underline")
        break;
      case "code":
        toggleMark(editor, "code")
        break;
    }
  }

  return (
    <>
      <Button.Group basic compact widths={8} fluid className="richTextButtonGroup">
        <Popup
          position="top center"
          basic
          hoverable
          trigger={
            <Button
              data-testid="align-left-button"
              icon="align left"
              onClick={event => handleClick(event, "left")}
              active={props.state.textAlign === "left"}
            />
          }
        >
          <Popup.Header>Left align</Popup.Header>
          <Popup.Content><code>ctrl + 1</code></Popup.Content>
        </Popup>

        <Popup
          position="top center"
          basic
          hoverable
          trigger={
            <Button
              data-testid="align-center-button"
              icon="align center"
              onClick={event => handleClick(event, "center")}
              active={props.state.textAlign === "center"}
            />
          }
        >
          <Popup.Header>Center align</Popup.Header>
          <Popup.Content><code>ctrl + 2</code></Popup.Content>
        </Popup>

        <Popup
          position="top center"
          basic
          hoverable
          trigger={
            <Button
              data-testid="align-right-button"
              icon="align right"
              onClick={event => handleClick(event, "right")}
              active={props.state.textAlign === "right"}
            />
          }
        >
          <Popup.Header>Right align</Popup.Header>
          <Popup.Content><code>ctrl + 3</code></Popup.Content>
        </Popup>

        <Popup
          position="top center"
          basic
          hoverable
          trigger={
            <Button
              data-testid="justify-button"
              icon="align justify"
              onClick={event => handleClick(event, "justify")}
              active={props.state.textAlign === "justify"}
            />
          }
        >
          <Popup.Header>Justify</Popup.Header>
          <Popup.Content><code>ctrl + 4</code></Popup.Content>
        </Popup>

        <Button
          data-testid="bold-button"
          icon="bold"
          onClick={(event) => handleClick(event, "bold")}
          active={isMarkActive(editor, "bold")}
        />

        <Button
          data-testid="italic-button"
          icon="italic"
          onClick={(event) => handleClick(event, "italic")}
          active={isMarkActive(editor, "italic")}
        />

        <Button
          data-testid="underline-button"
          icon="underline"
          onClick={(event) => handleClick(event, "underline")}
          active={isMarkActive(editor, "underline")}
        />

        <Button
          data-testid="code-button"
          icon="code"
          onClick={(event) => handleClick(event, "code")}
          active={isMarkActive(editor, "code")}
        />

      </Button.Group>
    </>
  );
};

const toggleMark = (editor: CustomEditor, format: string) => {
  const isActive = isMarkActive(editor, format);
  isActive ? Editor.removeMark(editor, format) : Editor.addMark(editor, format, true);
}

const isMarkActive = (editor: CustomEditor, format: string) => {
  const marks = Object(Editor.marks(editor));
  return marks ? (marks[format] === true) : false
}

const mapStateToProps = (state: Object) => ({
  state: state
})

const mapActionsToProps = {
  onAlignLeft: alignLeftAction,
  onAlignCenter: alignCenterAction,
  onAlignRight: alignRightAction,
  onJustify: justifyAction
};

export default connect(mapStateToProps, mapActionsToProps)(RichTextButtons);