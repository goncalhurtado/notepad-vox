import { useState } from "react";
import "./App.css";
import CardCreator from "./components/CardCreator";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import NoteGrid from "./components/NoteGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="row">
      <CardCreator />

      <NoteGrid />
    </div>
  );
}

export default App;
