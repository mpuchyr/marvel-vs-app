import React from 'react';
import './App.css';
import useFetch from './hooks/useFetch'

function App() {

  const [characters] = useFetch('a')

  console.log(characters)

  return (
    <div className="App">
      <h1>Marvel vs App</h1>
    </div>
  );
}

export default App;
