// import logo from './logo.svg';
import './App.css';
import Alerts from './components/Alerts';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import React, {useState} from 'react'

function App() {
  const[mode,setmode]=useState("light");
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({message:message,
  type:type})
  }
  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor='#131a48';
      showalert("Dark mode enabled","success");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor='white';
      showalert("Dark mode disabled","success");
    }
  }

  return (
<>
<Navbar title="My Text Editor" mode={mode} togglemode={togglemode}/>
{/* <About/> */}
<Alerts alert={alert} />
<Textbox mode={mode} showalert={showalert}/>
</>  );
}
export default App;
