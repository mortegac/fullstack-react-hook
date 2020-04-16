import React, {useState, useEffect} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

const Header = (props) => {

  const [count, setCount] = useState(0);
  
  useEffect( function persistForm() { localStorage.setItem('contador', count); });
  useEffect( function updateTitle() { document.title = `El contador va en ${count}` ; });

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

const UserList = (props) => {

  const [list, setList] = useState([]);
  
  useEffect( ()=>{

    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then( response => {
      console.log('me ejecute')
      setList(response.data)
    } )
  // });
  }, [] ); // Se pasa un array vacio para que el efecto se llame solo una vez 

  return(
    <>
      <h1>Usuarios</h1>
      <ul>
      { list.map( (user, index)=>{
        return <li key={index}>
                  [{user.id}] {user.name}
                  <span>{user.email}</span> 
               </li>
      })}
      </ul>
      
    </>
)}

const App = () => {
  return (
    <div className="App">
      <Header title="Hook useState" />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <UserList/>

      </header>
    </div>
  );
}

export default App;
