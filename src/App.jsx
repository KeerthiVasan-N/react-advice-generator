 import dice from "./images/icon-dice.svg"
 import paud from "./images/pattern-divider-desktop.svg"
 import paum from "./images/pattern-divider-mobile.svg"
import { useState } from "react"
import { useEffect } from "react"
 function App() {
  let [quote,setquote]=useState({id:1,advice:"Trust Your Guts!"})

const fetcho = async()=>{
  try{
    let val=await fetch("https://api.adviceslip.com/advice")   
    let vali=await val.json()
    setquote(vali.slip)
    console.log(quote)

  }catch(e){
    console.log(e)
    alert("Network error try again!")
  }
     
};

useEffect(()=>{
  
  fetcho()
},[])

  return (
    <>
     <div className="card">
      <h1>Advice # {quote.id} </h1>
      <div>

      <q>
      {quote.advice}
      </q>
      </div>
      <picture>
        <source media="(min-width:767px )" srcSet={paud} />
        <img src={paum} alt="" className="pic" />
      </picture>
      <div className="b">
        <button onClick={fetcho}>
           <img src={dice} alt="" />
        </button>
      </div>
     </div>
    </>
  
  );
}

export default App;
