import React from 'react';
import './App.css';

import Stack from '@mui/material/Stack';
import Title from './components/header.component/header.component';
import Persona from './components/persona.component/persona.component';

const App = () => {

  const personas = [
    {
      id: 1,
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/702/702003.png',
      tag: 'Bruce',
      age: '43',
      smoker: 'Yes',
      isMarried: 'Single',
    },
    {
      id: 2,
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/702/702021.png',
      tag: 'Sheila',
      age: '35',
      smoker: 'No',
      isMarried: 'Single',
    },
    {
      id: 3,
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/3695/3695380.png',
      tag: 'the Mob',
      age: '42 & 39',
      smoker: 'No & No',
      isMarried: 'Married',
    },
  ]

  return (
    <div className="App">
      <Title />
      <Stack direction="row" spacing={6} className="App-header">
        {personas.map((persona) => (
          <Persona key={persona.id} persona={persona} />
        ))}
      </Stack>
    </div>
  );
}

export default App;
