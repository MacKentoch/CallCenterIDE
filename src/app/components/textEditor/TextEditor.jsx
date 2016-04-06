import React                  from 'react';
import {Editor, EditorState}  from 'draft-js';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  editorChanged(editorNewState) {
    this.setState({
      editorState: editorNewState
    });
  }

  render() {
    const {editorState} = this.state;

    return (
      <Editor
        editorState={editorState}
        onChange={(editorNewState)=>this.editorChanged(editorNewState)}
      />
    );
  }
}

export default TextEditor;
