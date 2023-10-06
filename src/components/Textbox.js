import React ,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textbox(props) {
  let btncolor;
  let flag=0;
  if(props.greenmode==='light'&& props.redmode==='light'&&props.yellowmode==='light'&&props.mode==='light')
  {
     btncolor='primary';
     flag=1;
  }
  else if(props.greenmode==='success'&& props.redmode==='light'&&props.yellowmode==='light'&&props.mode==='light'){
     btncolor='success';
  }
  else if(props.greenmode==='light'&& props.redmode==='light'&&props.yellowmode==='warning'&&props.mode==='light'){
     btncolor='warning';
  }
  else if(props.redmode==='danger'){
    btncolor='danger';
 }
  else if (props.mode==='dark'){
     btncolor="dark";
  }
  else{
    btncolor="primary";
  }
  const Upclickhandler= ()=>{
  let change=text.toUpperCase();
  setText(change);
  props.showalert("Converted to uppercase","success");
  }

  const lowerClickHandler= ()=>{
    let change=text.toLowerCase();
    setText(change);
    props.showalert("Converted to lower case","success");
    }

    const clearClickHandler=() =>{
      setText('')
      props.showalert("Text cleared","success");
    }

    const copyClickHandler=() =>{
      navigator.clipboard.writeText(text)
      props.showalert("Copied to clipboard","success");
    }


  const onChangeHandler= (event)=>{
    setText(event.target.value)
  }

  const extraClickHandler= (event)=>{
    let mytext= text.split(' ').filter(word => word).join(' ')
    setText(mytext)
    props.showalert("Extra space removed","success");
  }

  const[text,setText]= useState('');
  const words=text.split(' ').filter(word => word).join(' ')
  return (
    <div className={`container text-${flag===1?'dark':'light'}`}>
    <div className="mt-5">
    <textarea style={{backgroundColor:props.mode==='dark'?'dark':'#f6f8fa'}} className="form-control" id="exampleFormControlTextarea1 " rows="8" value={text} onChange={onChangeHandler}></textarea>
    <p>{words.length===0?'0':words.trim().split(" ").length } words and {text.length} characters</p>
    </div>
    <button className={`btn btn-${btncolor} my-2 mx-2`} onClick = {Upclickhandler}>Uppercase</button>
    <button className={`btn btn-${btncolor} my-2 mx-2`} onClick = {lowerClickHandler}>Lowercase</button>
    <button className={`btn btn-${btncolor} my-2 mx-2`} onClick = {clearClickHandler}>Clear</button>
    <button className={`btn btn-${btncolor} my-2 mx-2`} onClick = {copyClickHandler}>Copy to Clipboard</button>
    <button className={`btn btn-${btncolor} my-2 mx-2`} onClick = {extraClickHandler}>Remove extra space</button>
    </div>
  )
}
Textbox.propTypes={heading: PropTypes.string.isRequired};
Textbox.defaultProps={heading: 'Text'};
