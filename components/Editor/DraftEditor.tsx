import { Editor, EditorState } from 'draft-js';
import React, { useRef } from 'react';

export default function DraftEditor(): JSX.Element {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
  const editor = useRef<Editor | null>(null);
  function focusEditor() {
    editor.current?.focus();
  }
  return (
    <div onClick={focusEditor}>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={editorState => setEditorState(editorState)}
      />
    </div>
  );
}
