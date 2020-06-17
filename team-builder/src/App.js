import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Card from "./Components/Card";
import Characters from "./Components/DummyData";
import Form from "./Components/Form";


const initialFormValues = {
  name: '',
  from: '',
  //^^^^ dropdown
  title: '',
  species: '',
}

function App() {
  const [characters, setCharacters] = useState(Characters);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onSubmit = event =>{
    event.preventDefault()
    if(!formValues.name || !formValues.from || !formValues.title || !formValues.species){
      return
    }
    const newCharacter = {...formValues, id: uuid()}
    setCharacters([newCharacter, ...characters])
    setFormValues(initialFormValues)
  }

  const onInputChange = event =>{
    const {name, value} = event.target
    setFormValues({...formValues, [name]: value})
  }

  return (
    <div className="App">
      <header>
        <h1>Add YOUR favorites!!</h1>
      </header>
      <Form values={formValues} onSubmit={onSubmit} onInputChange={onInputChange}/>
      <Card characters={characters}/>
    </div>
  );
}

export default App;
