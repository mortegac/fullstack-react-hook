import React, {useEffect, useState} from 'react';

const Header = (props) => {

  const [count, setCount] = useState(0);
  
  useEffect( function persistForm() { localStorage.setItem('contador', count); });
  useEffect( function updateTitle() { document.title = `El contador va en ${count}` ; });

  return(
    <>
      <h1>{props.title}</h1>
      {/* <h6>Contador: {count}</h6>
      <button 
        onClick={() => setCount(count + 1)}>
        Sumar contador
      </button> */}
    </>
)}



export default Header;