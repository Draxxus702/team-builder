import React, {useState} from 'react';
import './App.css';
import Form from './component/Form'
import Card from './component/Card'

function App() {
const [state, setState]= useState([])

const addNewMember= registerMember => {
  const newMember ={
    id: Date.now(),
    name: registerMember.name,
    email: registerMember.email,
    role: registerMember.role
  }
  setState([...state, newMember])
}
console.log(state)

  return (
    <div className="App">
      <h1>Your Team</h1>
      <div className='inputForm'>
      <Form addNewMember={addNewMember}/>
      <Card state={state}/>
      </div>
    </div>
  );
}

export default App;
