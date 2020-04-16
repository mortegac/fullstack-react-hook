import React from "react";

const Context = React.createContext( 
    {
        width: window.innerWidth, 
        height:window.innerHeight
    }
)

Context.displayName = 'Contexto de mi APP';

export {Context};