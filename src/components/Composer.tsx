import { useState, useMemo, useCallback, KeyboardEvent } from "react";
import { createEditor, Node, Descendant } from "slate";
// See docs and examples at https://docs.slatejs.org
import { Slate, Editable, withReact, useSlate } from "slate-react";
import { alignLeftAction, alignCenterAction, alignRightAction, justifyAction } from "../actions/Actions";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import isHotkey from 'is-hotkey'
import TextStatistics from "./TextStatistics";
import RichTextButtons from "./RichTextButtons";
import { countMatches, HOTKEYS, Element, Leaf } from "../utils/Utils";
import { withHistory } from 'slate-history'
import "../css/Composer.css";

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  }
];

const Composer = (props: AnyAction) => {
  const [value, setValue] = useState<Descendant[]>(initialValue);
  const [vowelsCount, setVowelsCount] = useState<number>(countMatches(Node.string(initialValue[0]), "vowels"));
  const [consonantsCount, setConsonantsCount] = useState<number>(countMatches(Node.string(initialValue[0]), "consonants"));
  const [wordsCount, setWordsCount] = useState<number>(countMatches(Node.string(initialValue[0]), "words"));

  const updateValues = (value: Descendant[]) => {
    let composerText: string = Node.string(value[0]);
    setValue(value);
    setVowelsCount(countMatches(composerText, "vowels"));
    setConsonantsCount(countMatches(composerText, "consonants"));
    setWordsCount(countMatches(composerText, "words"));
  }

  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const onChange = useCallback((value) => updateValues(value), []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  return (
    <>
      <Slate editor={editor} value={value} onChange={onChange}>
        <RichTextButtons editor={useSlate} />
        <div className="composer">
          <Editable
            className="editable"
            style={{ textAlign: props.textAlign }}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter some text..."
            autoFocus
            spellCheck={false}
            onKeyDown={event => handleKeyDownPress(event, props)}
          />
        </div>
        <TextStatistics
          consonants={consonantsCount}
          vowels={vowelsCount}
          words={wordsCount}
        />
      </Slate>
    </>
  );
};

const handleKeyDownPress = (event: KeyboardEvent<HTMLDivElement>, props: AnyAction) => {
  for (const hotkey in HOTKEYS) {
    if (isHotkey(hotkey, event as any)) {
      event.preventDefault();
      switch (HOTKEYS[hotkey]) {
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
        default:
          break;
      }
    }
  }
}

const mapStateToProps = (state: { textAlign: string; }) => ({
  textAlign: state.textAlign
});

const mapActionsToProps = {
  onAlignLeft: alignLeftAction,
  onAlignCenter: alignCenterAction,
  onAlignRight: alignRightAction,
  onJustify: justifyAction,
};

export default connect(mapStateToProps, mapActionsToProps)(Composer);