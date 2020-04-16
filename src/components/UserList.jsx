import React, {useEffect, useState} from 'react';
import axios from 'axios';


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


export default UserList;
