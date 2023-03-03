import React from "react";
import ReactDOM from "react-dom/client";
import Header from './Components/Header'
import Body from './Components/Body'


import './app.css'
const {createRoot} = ReactDOM;

const App = ()  =>{
    return (
         <div className="body">

           <Header/>
           <Body/>
         
         
           </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)

