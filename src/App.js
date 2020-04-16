import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const Header = (props) => {
  
  const [count, setCount] = useState(0);

  return(
    <>
      <h1>{props.title}</h1>
      <h6>Contador: {count}</h6>
      <button 
        onClick={() => setCount(count + 1)}>
        Sumar contador
      </button>
    </>
)}

const App = () => {
  return (
    <div className="App">
      <Header title="Hook useState" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
