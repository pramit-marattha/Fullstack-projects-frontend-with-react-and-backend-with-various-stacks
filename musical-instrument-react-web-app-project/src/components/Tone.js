import { useEffect, useState } from "react";
import Player from "./Player";

const Tone = ({ instrumentName, notes }) => {
  const [instrumentPlayer, setInstrumentPlayer] = useState(null);
  useEffect(() => {
    setInstrumentPlayer(Player());
  }, []);

  const setInstrument = () => {
    instrumentPlayer.setInstrument(instrumentName);
  };

  const playNotes = () => {
    if (instrumentPlayer) {
      instrumentPlayer.playNote(notes[0]);
    }
  };

  useEffect(() => {
    if (instrumentPlayer) {
      setInstrument();
      playNotes();
    }
  }, [instrumentPlayer]);

  useEffect(() => {
    if (notes && notes.length > 0) {
      playNotes();
    }
  }, [notes]);

  return null;
};

export default Tone;