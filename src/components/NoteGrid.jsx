import Note from "./Note";
import PropTypes from "prop-types";

// import { updateData } from "../helpers/addNote";

const NoteGrid = ({ notes, setNotes }) => {
  return (
    <>
      {notes?.map((note) => (
        <Note key={note.key} note={note} setNotes={setNotes} />
      ))}
      {/* <CardCreator handleAddNote={handleAddNote} /> */}
    </>
  );
};

export default NoteGrid;
