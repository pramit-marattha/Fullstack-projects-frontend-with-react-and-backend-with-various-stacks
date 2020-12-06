import NOTES from '../components/Notes';

export default (note) => {
    return NOTES.includes(note) && note.includes('#')
}