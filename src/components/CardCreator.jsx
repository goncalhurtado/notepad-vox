import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { addNote } from "../helpers/addNote";
import { fetchNotes } from "../helpers/fetchNotes";

const CardCreator = ({ setNotes }) => {
  const [dataForm, setDataForm] = useState({});
  const [countText, setCountText] = useState(0);
  const [countTitle, setCountTitle] = useState(0);
  const [show, setShow] = useState(true);
  const [color, setColor] = useState("yellow");

  const handleChangeColor = (e) => {
    setColor(e.target.value);
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

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
    <div
      className={`col-12 col-sm-6 col-md-4 card ${color} mt-2 justify-content-center`}
    >
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
                setShow(false);
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
                setShow(true);
              }}
            ></textarea>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-3">
              <select
                className="form-select"
                defaultValue={color}
                onChange={handleChangeColor}
                name="color"
              >
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
              </select>
            </div>

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
