import React ,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textbox(props) {
  const Upclickhandler= ()=>{
  let change=text.toUpperCase();
  setText(change);
  }

  const lowerClickHandler= ()=>{
    let change=text.toLowerCase();
    setText(change);
    }
  const onChangeHandler= (event)=>{
    setText(event.target.value)
  }
  const[text,setText]= useState(' ');
  let words=text.replace(/(^\s*)|(\s*$)/gi,"");
  return (
    <>
    <h3>{props.title}</h3>
    <div className="mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={onChangeHandler}></textarea>
    <p>{words.trim().split(" ").length } words and {text.length} characters</p>
    </div>
    <button className="btn btn-primary" onClick = {Upclickhandler}>Uppercase</button>
    <button className="btn btn-primary mx-4" onClick = {lowerClickHandler}>Lowercase</button>

    </>
  )
}
Textbox.propTypes={heading: PropTypes.string.isRequired};
Textbox.defaultProps={heading: 'Text'};
