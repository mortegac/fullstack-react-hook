import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

const MyContext = React.createContext();

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

const UserList = () => {

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


const useSize = () => {

  const [ width, setWidth ] = useState(window.innerWidth);
  const [ height, setHeight ] = useState(window.innerHeight);

  //Agregar listener
  const handleResize = () => {

    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {

    //  Se debe limpiar el listener con cada ejecución
    window.addEventListener('resize', handleResize)


    // Se dispara antes que la función principal se dispare
    return () => {
      window.removeEventListener('resize', handleResize)
    }
    
  }, [] )


  return {
    width,
    height
  }

}

// Ejemplpo de Context

const Hijo = () => { 
  return(
    <div>
      <h5>Hijo</h5>
      <Nieto/>
    </div>
  )
}

// FORMA TRADICIONAL DE CONSUMIR EL CONTEXT
// const Nieto = () => (
    // <MyContext.Consumer>
    // {
    //    (context) => (
    //       <div>
    //         <h5>Nieto</h5>
    //         <h4>
    //           <span><i>width = </i>{context.width} px</span> <br />
    //           <span><i>height = </i>{context.height} px</span>
    //         </h4>
    //       </div>

    //    )
    // }
    // </MyContext.Consumer>
// )

const Nieto = () => {

  // const context = useContext(MyContext)
  const { width, height } = useContext(MyContext)


return(
  <div>
    <h5>Nieto</h5>
    <h4>
    <span><i>width = </i>{ width } px</span> <br />
    <span><i>height = </i>{ height } px</span>
    </h4>
    </div>
)
}


const App = () => {

  const { width, height} = useSize();

  return (
    <MyContext.Provider value={{ width, height }}>
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

          <UserList/>


        </header>
      </div>
    </MyContext.Provider>  
  );
}

export default App;
