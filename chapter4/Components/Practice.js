import React, { useContext } from "react";
import { useState, createContext } from "react";
const Context=createContext();
console.log(Context)
function Practice() {
  const [count, setCount] = useState(0);
 
 const a =50;
 const b =70;

 const obj={
    d:80,
    c:99
 }
  return (
    <>
     
      <Context.Provider value={{a,b}}>
      {console.log(Context)}
        <Practice1/>
        <Practice2/>
        </Context.Provider>
    



    
    </>
  );
}

function Practice1() {
    const {d}= useContext(Context);
    {console.log(Context)}
  return (
    <>
      
      {d}
    </>
  );
}

function Practice2() {
    const {c}= useContext(Context);
  return (
    <>
      {c}
    </>
  );
}
export default Practice