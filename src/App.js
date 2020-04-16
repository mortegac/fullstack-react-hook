import React, {useRef} from 'react';

import logo from './logo.svg';
import './App.css';

import {Context} from "./components/context";
import Hijo from './components/Hijo';
import Header from './components/Header';
import UserList from './components/UserList'

import useSize from './components/useSize';


const App = () => {

  const { width, height} = useSize();
  const enlace = useRef();

  const focus = () => enlace.current.focus();
  const blur = () => enlace.current.blur();

  return (
    <Context.Provider value={{width, height}}>
      <div className="App">
        <Header title="Hook useState" />
        <h2>
          <span><i>width = </i>{width} px</span> <br />
          <span><i>height = </i>{height} px</span>
        </h2>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <hr/>
          <Hijo/>
          <hr/>

          {/**************** useRef *****************************/}
          <input
            type='text'
            placeholder='Ingrese un texto'
            ref={enlace}
          
          />
          {/* <button onClick={ () => console.log('<useRef>',enlace)} >Habilitar Focus</button> */}
          <button onClick={ focus } >Habilitar Focus</button>
          <button onClick={ blur } >Habilitar Blur</button>
          
          {/**************** useRef *****************************/}

          <UserList/>





        </header>
      </div>
    </Context.Provider>  
  );
}

export default App;
