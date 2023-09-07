import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { deleteNote } from "../helpers/deleteNote";
import { fetchNotes } from "../helpers/fetchNotes";

const Note = ({ note, setNotes }) => {
  const { key, cardText, cardTitle, time } = note;
  function handle() {
    deleteNote(key);
    fetchNotes(setNotes);
  }

  return (
    <div className="card mt-5 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <div className="card-body">
        <div className="card-title">
          <h3 id="cardTitle" name="cardTitle" className="" type="text">
            {cardTitle}
          </h3>
        </div>
        <div className="card-text mb-2">
          <p id="cardText" name="cardText" className="" type="text">
            {cardText}
          </p>
          <p>{time}</p>
          <a onClick={handle} className="btn bi bi-trash3"></a>
        </div>
      </div>
    </div>
  );
};

export default Note;
