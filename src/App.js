import React, {useEffect} from 'react';
import './App.css';
import Parrot from "./parrot/parrot";

function App() {

    useEffect(()=>{
        document.title="Moki"
    },[])

  return (
    <div className="App">
      <header className="App-header">
        <Parrot />
        <p>
          Moki no és a casa.
        </p>
      </header>
    </div>
  );
}

export default App;
