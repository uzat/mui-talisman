import React from 'react';
import './App.css';

import Title from './components/header.component/header.component';
import Personas from './components/personas/personas.component';

const App = () => {

  const personas = [
    {
      id: 1,
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/702/702003.png',
      name: 'Bruce',
      age: '43',
      smoker: 'Yes',
      status: 'Single',
      drinks: 'Rarely',
      diet: 'Vegan'
    },
    {
      id: 2,
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/702/702021.png',
      name: 'Sheila',
      age: '35',
      smoker: 'No',
      status: 'Single',
      drinks: 'Rarely',
      diet: 'Red meat'
    },
    {
      id: 3,
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/3695/3695380.png',
      name: 'the Mob',
      age: '42 & 39',
      smoker: 'No & No',
      status: 'Married',
      drinks: 'Sometimes',
      diet: 'Mixed'
    },
  ]

  return (
    <div className="App">
      <Title />
      <Personas personas={personas}/>
    </div>
  );
}

export default App;
