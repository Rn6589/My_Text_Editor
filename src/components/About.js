import React,{useState} from 'react'

export default function About() {
  const darkModeHandler=() => {
    if(dark.color==='black'){
      setdark({backgroundColor:'black',color:'white'
    }); 
    setbtntext('Light Mode');
    }
    else{
      setdark({backgroundColor:'white',color:'black'});
      setbtntext('Dark Mode');
    }


  }
  const [dark,setdark]=useState({backgroundColor:"white",color:"black"})
  const [btntext,setbtntext]=useState('Dark mode');
  return (
  <>
      <button className="btn btn-primary float-end my-2 me-2" onClick={darkModeHandler} >{btntext}</button>
      <div className="container "style={{marginTop:30, marginBottom:5}}>
        <h1 style={{marginBottom:0}}>About us</h1>
      </div>
      <div className="container " >
        <div className="accordion accordion-flush" style={dark} id="accordionFlushExample">
          <div className="accordion-item" style={dark}>
            <h2 className="accordion-header" style={dark}>
              <button style={dark} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                About us
              </button>
            </h2>
            <div style={dark} id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div style={dark} className="accordion-body">My text editor is single page application build with react. It allows users
              to enter text on a textbox and perform different operantion to manipulate the text. It's functionality are explained below:</div>
            </div>
          </div>
          <div style={dark} className="accordion-item">
            <h2 style={dark} className="accordion-header">
              <button style={dark} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Uppercase & Lowercase
              </button>
            </h2>
            <div style={dark} id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div style={dark} className="accordion-body">Uppercase converts all the text into uppercase. Similarly, lowercase converts the text to lower case.</div>
            </div>
          </div>
          <div style={dark} className="accordion-item">
            <h2 style={dark} className="accordion-header">
              <button style={dark} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Copy to clipboard
              </button>
            </h2>
            <div style={dark} id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div style={dark} className="accordion-body">copy to clipboard is to 
              copy the text to clipboard so that copy-paste operation becomes easy.</div>
            </div>
          </div>
          <div style={dark} className="accordion-item">
            <h2 style={dark} className="accordion-header">
              <button style={dark} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Clear & Remove extra space
              </button>
            </h2>
            <div style={dark} id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div style={dark} className="accordion-body">Clear operation clears all the text in the textbox and Remove extra
              space removes more than one spaces between the words.</div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}
