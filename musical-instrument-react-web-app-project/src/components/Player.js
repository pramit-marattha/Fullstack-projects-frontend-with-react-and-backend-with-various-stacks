import SoundFontPlayer from "soundfont-player";
import AudioContext from "./AudioContext";

const NullSoundFontPlayerNoteAudio = {
  stop() {}
};

const NullSoundFontPlayer = {
  play() {
    return NullSoundFontPlayerNoteAudio;
  }
};

const Player = () => {
  const audioContext = AudioContext && new AudioContext();

  let soundFPlayer = NullSoundFontPlayer;

  const audioPlayer = {
    setInstrument(instrumentName) {
      SoundFontPlayer.instrument(audioContext, instrumentName)
        .then(soundFontPlayer => {
          soundFPlayer = soundFontPlayer;
        })
        .catch(e => {
          soundFPlayer = NullSoundFontPlayer;
        });
    },
    playNote(note) {
      return soundFPlayer.play(note);
    }
  };

  return audioPlayer;
};

export default Player;