import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import NoteGrid from "./components/NoteGrid";
import CardCreator from "./components/CardCreator";
import { useEffect, useState } from "react";
import { fetchNotes } from "./helpers/fetchNotes";

function App() {
  const [notes, setNotes] = useState([]);
  const handle = (e) => {
    e.preventDefault();
    window.open(
      "https://www.linkedin.com/in/gonzalo-javier-hurtado-1bba76284/",
      "_blank"
    );
  };

  useEffect(() => {
    fetchNotes(setNotes);
  }, []);

  return (
    <>
      <div className="w-100 bg-primary text-center">
        <h4 className="p-0 p-2">Color NotePad</h4>
      </div>
      <div className="container h-100 ">
        <div className="row h-100 w-100 d-lg-flex justify-content-center justify-content-lg-start">
          <CardCreator setNotes={setNotes} />

          <NoteGrid notes={notes} setNotes={setNotes} />
        </div>
      </div>
      <div className="contFooter mt-3 p-1 bg-primary text-center d-flex justify-content-center align-items-center">
        <h5 className="m-0 p-0 p-2">Develop By Goncal Hurtado</h5>
        <i
          onClick={handle}
          class="bi bi-linkedin"
          style={{ cursor: "pointer", fontSize: "20px" }}
        ></i>
      </div>
    </>
  );
}

export default App;
