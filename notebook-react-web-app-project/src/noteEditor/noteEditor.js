import React from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import EditLocationTwoToneIcon from "@material-ui/icons/EditLocationTwoTone";

import { withStyles } from "@material-ui/core/styles";
import noteEditorStyles from "./noteEditorStyles";

class EditorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: "",
    };
  }

  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id,
    });
  };

  componentDidUpdate = () => {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id,
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.editorContainer}>
        <EditLocationTwoToneIcon
          className={classes.editIcon}
        ></EditLocationTwoToneIcon>
        <input
          className={classes.titleInput}
          placeholder="Enter Note Heading...."
          value={this.state.title ? this.state.title : ""}
          onChange={(e) => this.updateTitle(e.target.value)}
        ></input>
        <ReactQuill
          value={this.state.text}
          onChange={this.updateBody}
        ></ReactQuill>
      </div>
    );
  }
  updateBody = async (val) => {
    await this.setState({ text: val });
    this.update();
  };
  updateTitle = async (txt) => {
    await this.setState({ title: txt });
    this.update();
  };
  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.text,
    });
  }, 1500);
}

export default withStyles(noteEditorStyles)(EditorComponent);
