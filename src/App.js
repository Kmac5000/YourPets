import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro/Intro";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </div>
  );
}

export default App;
