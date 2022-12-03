import e from 'cors';
import React from 'react'

function Prueba() {
  
  const hola = () =>{
    console.log("hola");
  }


  return (
    
    <div><input type="text"  onChange={hola}  /></div>
  )
}

export default Prueba