import React,{useState} from 'react';
import Squaregenerater from './Squaregenerater';
// import { useState } from 'react';
import './App.css';


const App = () => {
  let [usevalue,setvalue]=useState(6)
  let [useheight,setheight]=useState(6)


  const new10=()=>{
    setheight(10)
    setvalue(10)
  }
  return (
    <div  className='App'>
      <h1>Square Generator</h1>
   
     <h5>number of cells on the width: {usevalue} </h5>
     <h5>number of cells on the height: {useheight}</h5>
     <h5>number of colors: 4</h5>


      <button onClick={()=>new10()}
      >press here For 10 * 10</button>
      <Squaregenerater width={usevalue} height={useheight} numColors={4} />


    </div>
  );
};

export default App;
