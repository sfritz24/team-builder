import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Card from "./Components/Card";
import Characters from "./Components/DummyData";


const initialFormValues = {
  name: '',
  from: '',
  title: '',
//^^^^ dropdown
  species: '',
}

function App() {
  const [characters, setCharacters] = useState(Characters);
  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div className="App">
      <header>
        <h1>Add YOUR favorites!!</h1>
      </header>
      <div>Form</div>
      <Card/>
    </div>
  );
}

export default App;
