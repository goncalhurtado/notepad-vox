import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CardCreator = () => {
  const [dataForm, setDataForm] = useState({});

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  //   console.log(dataForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a donde los necesites
    console.log(dataForm);
  };

  return (
    <div className="card w-25 mt-5">
      <form onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="card-title">
            <input
              name="cardTitle"
              className="form-control"
              type="text"
              placeholder="Add title here"
              onChange={handleChange}
            />
          </div>
          <div className="card-text mb-2">
            <textarea
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
