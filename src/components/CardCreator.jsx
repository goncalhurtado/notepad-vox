import PropTypes from "prop-types";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { addNote } from "../helpers/addNote";
import { fetchNotes } from "../helpers/fetchNotes";

const CardCreator = ({ setNotes }) => {
  const [dataForm, setDataForm] = useState({});
  const [countText, setCountText] = useState(0);
  const [countTitle, setCountTitle] = useState(0);
  const [show, setShow] = useState(true);

  let cardTitle = document.getElementById("cardTitle");
  let cardText = document.getElementById("cardText");

  const clearForm = () => {
    cardTitle.value = "";
    cardText.value = "";
  };

  const handleChangeTitle = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    setCountTitle(e.target.value.length);
  };
  const handleChangeText = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    setCountText(e.target.value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardTitle.value === "" || cardText.value === "") {
      return;
    }
    addNote(dataForm);
    clearForm();
    fetchNotes(setNotes);
    setCountText(0);
    setCountTitle(0);
  };

  return (
    <div className="card mt-5 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <form onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="card-title">
            <input
              id="cardTitle"
              name="cardTitle"
              className="form-control"
              type="text"
              placeholder="Add title here"
              onChange={handleChangeTitle}
              maxLength="25"
              onClick={() => {
                setShow(false), console.log(show);
              }}
            />
          </div>
          <div className="card-text mb-2">
            <textarea
              id="cardText"
              name="cardText"
              className="form-control"
              type="text"
              placeholder="Add text here"
              onChange={handleChangeText}
              maxLength="132"
              onClick={() => {
                setShow(true), console.log(show);
              }}
            ></textarea>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-3"></div>

            <div
              className={
                show ? "col-6 text-center d-none" : "col-6 text-center"
              }
            >
              {countTitle}/25
            </div>

            <div
              className={
                !show ? "col-6 text-center d-none" : "col-6 text-center"
              }
            >
              {countText}/132
            </div>

            <div className="col-3">
              {" "}
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardCreator;
