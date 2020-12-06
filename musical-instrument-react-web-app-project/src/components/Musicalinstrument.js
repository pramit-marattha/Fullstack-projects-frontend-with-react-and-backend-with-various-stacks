import React, { Fragment, useState, useEffect } from "react";
import isAccidentalNote from "../utils/isFallbackNote";
import { getKeyShortcut } from "../utils/getKeyShortcut";
import InstrumentAudio from "./Tone";
import getNotesBetween from "../utils/getNotesMid";

const isRegularKey = event => {
  return !event.ctrlKey && !event.metaKey && !event.shiftKey;
};
const Instrument = ({
  instrumentName,
  startNote,
  endNote,
  renderPianoKey,
  keyboardMap
}) => {
  const notes = getNotesBetween(startNote, endNote);

  const [state, setState] = useState({
    notesPlaying: []
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  }, []);

  const getNoteFromKeyboardKey = keyboardKey => {
    return keyboardMap[keyboardKey.toUpperCase()];
  };

  const handleKeyDown = e => {
    if (isRegularKey(e) && !e.repeat) {
      const note = getNoteFromKeyboardKey(e.key);
      if (note) {
        setState({ ...state, notesPlaying: [...state.notesPlaying, note] });
      }
    }
  };

  const handleKeyUp = e => {
    if (isRegularKey(e) && !e.repeat) {
      const note = getNoteFromKeyboardKey(e.key);
      if (note) {
        setState({
          ...state,
          notesPlaying: state.notesPlaying.filter(
            notePlaying => notePlaying !== note
          )
        });
      }
    }
  };

  const onPlayNoteStart = note => {
    setState({ ...state, notesPlaying: [...state.notesPlaying, note] });
  };

  const onPlayNoteEnd = note => {
    setState({
      ...state,
      notesPlaying: state.notesPlaying.filter(
        notePlaying => notePlaying !== note
      )
    });
  };

  //rendering piano keys
  return (
    <Fragment>
      {notes.map(note => {
        return (
          <Fragment key={note}>
            {renderPianoKey({
              note,
              isAccidentalNote: isAccidentalNote(note),
              isNotePlaying: state.notesPlaying.includes(note),
              startPlayingNote: () => onPlayNoteStart(note),
              stopPlayingNote: () => onPlayNoteEnd(note),
              keyboardShortcut: getKeyShortcut(keyboardMap, note)
            })}
          </Fragment>
        );
      })}

      <InstrumentAudio
        instrumentName={instrumentName}
        notes={state.notesPlaying}
      />
    </Fragment>
  );
};

export default Instrument;