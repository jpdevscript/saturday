import React from 'react';
import './App.css';

function App(props) {
  const handleBtnClick = (e) => {
    e.preventDefault();
    props.history.push(`/form1`);
  }

  return (
    <div className="App">
      <header className="App-header">
        Hi, James please click below
        <button className= "form-btn" onClick= {handleBtnClick}>Continue</button>
      </header>
    </div>
  );
}

export default App;
