import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import NoteGrid from "./components/NoteGrid";
import CardCreator from "./components/CardCreator";
import { useEffect, useState } from "react";
import { fetchNotes } from "./helpers/fetchNotes";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetchNotes(setNotes);
  }, []);

  return (
    <div className="container">
      <div className="row w-100 d-lg-flex justify-content-center justify-content-lg-start">
        <CardCreator setNotes={setNotes} />

        <NoteGrid notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default App;
