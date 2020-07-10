import React from 'react';
import './App.css';
import useFetch from './hooks/useFetch'
import Characters from './components/Characters'

function App() {


  return (
    <div className="App">
      <h1>Marvel vs App</h1>
      <Characters />
    </div>
  );
}

export default App;
