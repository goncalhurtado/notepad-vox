import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { deleteNote } from "../helpers/deleteNote";
import { fetchNotes } from "../helpers/fetchNotes";
import { editNote } from "../helpers/editNote";

const Note = ({ note, setNotes }) => {
  const [edit, setEdit] = useState(false);
  let [dataForm, setDataForm] = useState({
    cardTitle: note.cardTitle,
    cardText: note.cardText,
  });

  const { key, cardText, cardTitle, time } = note;
  function handle() {
    deleteNote(key);
    fetchNotes(setNotes);
  }

  function handleEdit(e) {
    setEdit(true);
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    dataForm = note;
  }

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const titulo = document.getElementsByClassName("titleEdit");

  function handleSubmit(e) {
    e.preventDefault();
    if (
      dataForm.cardTitle === note.cardTitle &&
      dataForm.cardText === note.cardText
    ) {
      // No se realizaron cambios, salimos de la edición
      setEdit(false);
      return;
    }
    editNote(dataForm, key);
    fetchNotes(setNotes);
    setEdit(false);
  }

  return (
    <div className="card mt-5 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <form onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="card-title">
            {edit ? (
              <input
                id="cardTitle"
                name="cardTitle"
                className="form-control titleEdit"
                type="text"
                onChange={handleChange}
                defaultValue={cardTitle}
              />
            ) : (
              <h4
                id="cardTitle"
                name="cardTitle"
                className=""
                type="text"
                onClick={handleEdit}
              >
                {cardTitle}
              </h4>
            )}
          </div>
          <div className="card-text mb-2">
            {edit ? (
              <textarea
                id="cardText"
                name="cardText"
                className="form-control"
                type="text"
                onChange={handleChange}
                defaultValue={cardText}
              ></textarea>
            ) : (
              <p
                onClick={handleEdit}
                id="cardText"
                name="cardText"
                className="textEdit"
                type="text"
              >
                {cardText}
              </p>
            )}
            <div className="d-flex align-items-center">
              <p className="m-0">{time}</p>
              <a onClick={handle} className="btn bi bi-trash3 p-0"></a>
            </div>
          </div>
          <div className="">
            {edit ? (
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Note;
