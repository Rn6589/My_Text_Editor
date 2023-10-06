// import logo from './logo.svg';
import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, {useState} from 'react'

function App() {
  const[mode,setmode]=useState("light");
  const[redmode,setredmode]=useState("light");
  const[greenmode,setgreenmode]=useState("light");
  const[yellowmode,setyellowmode]=useState("light");
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({message:message,
  type:type})
  setTimeout(() => {
    setalert(null);
  }, 1000);
  }
  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor='#656565';
      showalert("Dark mode enabled","success");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor='white';
      showalert("Dark mode disabled","success");
    }
  }

  const redtogglemode=()=>{
    if(redmode==="light"){
      setredmode("danger");
      document.body.style.backgroundColor='#a00024';
      showalert("Red mode disabled","success");
    }
    else{
      setredmode("light");
      document.body.style.backgroundColor='white';
      showalert("Red mode enabled","success");
    }
  }
  
  const yellowtogglemode=()=>{
    if(yellowmode==="light"){
      setyellowmode("warning");
      document.body.style.backgroundColor='#7b7000';
      showalert("Yellow mode disabled","success");
    }
    else{
      setyellowmode("light");
      document.body.style.backgroundColor='white';
      showalert("Yellow mode enabled","success");
    }
  }
  
  const greentogglemode=()=>{
    if(greenmode==="light"){
      setgreenmode("success");
      document.body.style.backgroundColor='#002b09';
      showalert("Green mode enabled","success");
    }
    else{
      setgreenmode("light");
      document.body.style.backgroundColor='white';
      showalert("Green mode disabled","success");
    }
  }

  return (
<>
<BrowserRouter>
<Navbar title="My Text Editor" redmode={redmode} greenmode={greenmode} yellowmode={yellowmode} mode={mode} redtogglemode={redtogglemode} greentogglemode={greentogglemode}
 yellowtogglemode={yellowtogglemode} togglemode={togglemode}/>
<Alerts alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
<Textbox mode={mode} redmode={redmode} greenmode={greenmode} yellowmode={yellowmode} showalert={showalert} />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>


  );
}
export default App;
