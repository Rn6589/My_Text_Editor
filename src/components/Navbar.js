import React from 'react'
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom'


export default function Navbar(props) {
  let finalmode;
  if(props.greenmode==='light'&& props.redmode==='light'&&props.yellowmode==='light'&&props.mode==='light')
  {
     finalmode='light';
  }
  else if(props.greenmode==='success'&& props.redmode==='light'&&props.yellowmode==='light'&&props.mode==='light'){
     finalmode='success';
  }
  else if(props.greenmode==='light'&& props.redmode==='light'&&props.yellowmode==='warning'&&props.mode==='light'){
     finalmode='warning';
  }
  else if(props.redmode==='danger'){
    finalmode='danger';
 }
  else if (props.mode==='dark'){
     finalmode="dark";
  }
  return (
<nav className={`navbar navbar-expand-lg navbar-${finalmode} bg-${finalmode} `}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About us</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button> */}
        <div className={`form-check form-switch mx-2 text-${props.greenmode==='light'?'success':'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.greentogglemode} role="switch" id="greenmode" />
          <label className="form-check-label" htmlFor="greenmode"  style={{ whiteSpace: 'nowrap' }}>Green mode</label>
        </div>
        <div className={`form-check form-switch mx-2 text-${props.yellowmode==='light'?'warning':'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.yellowtogglemode} role="switch" id="yellowmode" />
          <label className="form-check-label" htmlFor="yellowmode"  style={{ whiteSpace: 'nowrap' }}>Yellow mode</label>
        </div>
        <div className={`form-check form-switch mx-2 text-${props.redmode==='light'?'danger':'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.redtogglemode} role="switch" id="redmode" />
          <label className="form-check-label" htmlFor="redmode"  style={{ whiteSpace: 'nowrap' }}>Red mode</label>
        </div>
        <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  style={{ whiteSpace: 'nowrap' }}>Dark mode</label>
        </div>
      </form>

    </div>
  </div>
</nav>
  )
}
Navbar.propTypes={title: PropTypes.string.isRequired};
Navbar.defaultProps={
    title: 'Navbar'
}