import { CompositeDecorator, EditorState, Modifier } from "draft-js";
import { text } from "node:stream/consumers";
import React, { ReactNode, useEffect } from "react";
import createLiveMarkdownPlugin from "./MDPlugin";
import Editor from "@draft-js-plugins/editor";

const MDEditor = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const mdplugin = createLiveMarkdownPlugin({});
  const plugins = [mdplugin];

  return (
    <>
      <p>Hallo</p>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        stripPastedStyles={true}
        plugins={plugins}
      />
    </>
  );
};

export default MDEditor;

// Make it as plugin future me
