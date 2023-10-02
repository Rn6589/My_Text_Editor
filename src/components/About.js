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
                Accordion Item #1
              </button>
            </h2>
            <div style={dark} id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div style={dark} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
            </div>
          </div>
          <div style={dark} className="accordion-item">
            <h2 style={dark} className="accordion-header">
              <button style={dark} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div style={dark} id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div style={dark} className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati ducimus aut optio labore eos eaque, explicabo laudantium tenetur? Corrupti animi quibusdam omnis quisquam dolore officiis eveniet distinctio magni qui voluptatibus. Corporis, asperiores porro!Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div style={dark} className="accordion-item">
            <h2 style={dark} className="accordion-header">
              <button style={dark} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div style={dark} id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div style={dark} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}
