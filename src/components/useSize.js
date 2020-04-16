import React, {useState, useEffect } from 'react';



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



export default useSize;