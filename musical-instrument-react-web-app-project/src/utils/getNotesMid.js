import NOTES from '../components/Notes';

export default function getNotesMid(startNote, endNote) {
  const startingIndex = NOTES.indexOf(startNote);
  const endingIndex = NOTES.indexOf(endNote);
  return NOTES.slice(startingIndex, endingIndex + 1);
}