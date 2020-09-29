import React from "react";
import { withStyles } from "@material-ui/core/styles";
import sidebarStyles from "./sidebarStyles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import SidebarItemComponent from "../noteSidebaritem/noteSidebarItem";
import "./styles/btnStyles.css";

class SidebarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null,
    };
  }
  render() {
    const { notes, classes, selectedNoteIndex } = this.props;

    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button onClick={this.newNoteBtnClick} className="newNoteBtn">
            {this.state.addingNote ? "Cancel" : "+ Add New Note"}
          </Button>
          {this.state.addingNote ? (
            <div>
              <KeyboardArrowRightOutlinedIcon
                className={classes.editIcon}
              ></KeyboardArrowRightOutlinedIcon>
              <input
                type="text"
                className={classes.newNoteInput}
                placeholder="Your Note Heading"
                onKeyUp={(e) => this.updateTitle(e.target.value)}
              ></input>
              <Button
                className="newNoteSubmitBtn" //{classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Submit !
              </Button>
            </div>
          ) : null}
          <List>
            {notes.map((created_note, note_index) => {
              return (
                <div key={note_index}>
                  <SidebarItemComponent
                    created_note={created_note}
                    note_index={note_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  ></SidebarItemComponent>
                  <Divider></Divider>
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };
  updateTitle = (txt) => {
    this.setState({ title: txt });
  };
  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
  };
  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => this.props.deleteNote(note);
}

export default withStyles(sidebarStyles)(SidebarComponent);
