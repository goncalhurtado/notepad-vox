import { useState } from "react";
import "./App.css";
import CardCreator from "./components/CardCreator";

function App() {
  const [count, setCount] = useState(0);

  return <CardCreator />;
}

export default App;
