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
    <div className="container-fluid">
      <div className="row">
        <CardCreator setNotes={setNotes} />

        <NoteGrid notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default App;
