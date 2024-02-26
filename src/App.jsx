import { useState } from 'react'
import {useContext} from 'react'
import { CountContext } from './createContext'
import './App.css'

function App() {
  const [count,setCount]= useState(0);

  return (
    <div>
       <CountContext.Provider value={count}>
       <Count setCount={setCount}/>
       </CountContext.Provider>
    </div>
   
  )
}

function Count({setCount}){
  const count =useContext(CountContext);
    return <div>
      <CountRerender/>
      <button onClick= {function (){
        setCount(count+1);
      }}>Increase number</button>

      <button onClick= {function (){
        setCount(count-1);
      }}>Decrease number</button>
    </div>
}

function CountRerender(){
    const count =useContext(CountContext);
    return <div>
      {count}
    </div>
}
export default App
