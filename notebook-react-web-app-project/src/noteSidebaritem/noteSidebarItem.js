import React from "react";
import { withStyles } from "@material-ui/core/styles";
import sidebarItemStyles from "./sidebarItemStyles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import { removeHTMLTags } from "../helpers";

class SidebarItemComponent extends React.Component {
  render() {
    const { note_index, created_note, classes, selectedNoteIndex } = this.props;

    return (
      <div key={note_index}>
        <ListItem
          className={classes.listItem}
          selected={selectedNoteIndex === note_index}
          alignItems="flex-start"
        >
          <div
            className={classes.textSection}
            onClick={() => this.selectNote(created_note, note_index)}
          >
            <ListItemText
              primary={created_note.title}
              secondary={
                removeHTMLTags(created_note.body.substring(0, 30)) + "..."
              }
            ></ListItemText>
          </div>
          <DeleteSweepIcon
            onClick={() => this.deleteNote(created_note)}
            className={classes.deleteIcon}
          ></DeleteSweepIcon>
        </ListItem>
      </div>
    );
  }
  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => {
    this.props.deleteNote(note);
  };
}

export default withStyles(sidebarItemStyles)(SidebarItemComponent);
