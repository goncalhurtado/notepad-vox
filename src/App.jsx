import { useState } from "react";
import "./App.css";
import CardCreator from "./components/CardCreator";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex justify-content-center">
      <CardCreator />
    </div>
  );
}

export default App;
