import React, {useState} from 'react';
import './App.css';
import characters from "./Components/DummyData";

function App() {
  const [mainCharacters, setMainCharacters] = useState(characters[0]);
  const [secondChara, setSecondChara] = useState(characters[1]);
  const [creatures, setCreatures] = useState(characters[2]);
  const [booksMoives, setBooksMovies] = useState(characters[3]);
  return (
    <div className="App">
      <header>
        <h1></h1>

      </header>
    </div>
  );
}

export default App;
