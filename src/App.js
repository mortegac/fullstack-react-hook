import React, {useReducer} from 'react';

import logo from './logo.svg';
import './App.css';

// import {Context} from "./components/context";
// import Hijo from './components/Hijo';
import Header from './components/Header';
// import UserList from './components/UserList'

// import useSize from './components/useSize';


// Se debe utilizar una Función Pura
// Dado los mismos parámetros de entrada 
// El resultado siempre será el mismo resultado

// dispatch({ type: 'INCREMENT'})
const reducer = ( state, action ) => {

   switch (action.type) {
  
    case 'INCREMENT':
      return { 
        ...state,
        count: state.count + 1
      }
  
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
  
    default:
      return state;
  }
};




const App = () => {

  const [ state, dispatch ] = useReducer( reducer, { 
    count : 0,
    title: 'Hola'
  } );

  const increment = () => {  dispatch({ type : 'INCREMENT'}) };

  const decrement = () => {  dispatch({ type : 'DECREMENT'}) };


  return (

      <div className="App">
        <Header title="Hook useReducer" />
       

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          

          {/**************** useReducer *****************************/}

            <h3>Cuenta: { state.count } </h3>
          
          <button onClick={ increment } >Incrementar</button>
          <button onClick={ decrement } >Decrementar</button>
          
          {/**************** useRef *****************************/}

        
        </header>
      </div>

  );
}

export default App;
