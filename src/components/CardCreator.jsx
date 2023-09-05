import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { addNote } from "../helpers/addNote";

const CardCreator = () => {
  const [dataForm, setDataForm] = useState({});

  let cardTitle = document.getElementById("cardTitle");
  let cardText = document.getElementById("cardText");

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardTitle.value === "" || cardText.value === "") {
      return;
    }

    cardTitle.value = "";
    cardText.value = "";
    addNote(dataForm);
  };

  return (
    <div className="card ms-3 mt-5 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
      <form onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="card-title">
            <input
              id="cardTitle"
              name="cardTitle"
              className="form-control"
              type="text"
              placeholder="Add title here"
              onChange={handleChange}
            />
          </div>
          <div className="card-text mb-2">
            <textarea
              id="cardText"
              name="cardText"
              className="form-control"
              type="text"
              placeholder="Add text here"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardCreator;
