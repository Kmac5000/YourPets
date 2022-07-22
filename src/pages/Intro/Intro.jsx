import "./intro.css";
import { Button } from "react-bootstrap";

function Intro() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pets You May Know</h1>
        <Button className="startBtn" id="game-btn">
          Start
        </Button>
      </header>
    </div>
  );
}

export default Intro;
