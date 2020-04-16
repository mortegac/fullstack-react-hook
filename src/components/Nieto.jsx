import React, {useContext} from 'react';
import {Context} from "./context.js";

const Nieto = () => {
  
  const {width, height} = useContext(Context)

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



export default Nieto;