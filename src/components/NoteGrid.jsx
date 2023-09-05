import React from "react";
import { getNotes } from "../helpers/getNotes";
import Note from "./Note";

const NoteGrid = () => {
  const notes = getNotes();
  return (
    <>
      {notes.map((note) => (
        <Note key={note.key} note={note} />
      ))}
    </>
  );
};

export default NoteGrid;
