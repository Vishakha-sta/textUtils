import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const blue = () =>{
    props.themeColor("blue");
  }
  const grey = () =>{
    props.themeColor("grey");
  }
  const green = () =>{
    props.themeColor("green");
  }
  const red = () =>{
    props.themeColor("red");
  }
  const yellow = () =>{
    props.themeColor("yellow");
  }
  const cyan = () =>{
    props.themeColor("cyan");
  }
  const black = () =>{
    document.body.style.color = 'white';
    props.themeColor("black");
  }
  const white = () =>{
    props.themeColor("white");
  }
  const magenta = () =>{
    props.themeColor("magenta");
  }

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active"  to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.aboutTitle}</a>
              {/* <Link className="nav-link" to="/about">{props.aboutTitle}</Link> */}
            </li>
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}

          <div className={`form-check form-switch ${props.mode === `light` ? `text-dark`: `text-light`}`}>
            <input className="form-check-input" type="checkbox"  role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"></input>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
          </div>

        </div>
      </div>
    </nav>

  <div className="container color-palet" >

        <span className="badge rounded-pill bg-primary " onClick= {blue} >B</span>
        <span className="badge rounded-pill bg-secondary" onClick= {grey} >G</span>
        <span className="badge rounded-pill bg-success" onClick= {green} >G</span>
        <span className="badge rounded-pill bg-danger" onClick= {red} >R</span>
        <span className="badge rounded-pill bg-warning text-dark" onClick= {yellow} >Y</span>
        <span className="badge rounded-pill bg-info text-dark" onClick= {cyan} >C</span>
        <span className="badge rounded-pill text-light" style={{backgroundColor:'magenta', color:black}} onClick= {magenta} >M</span>
        <span className="badge rounded-pill bg-light text-dark" onClick= {white} >W</span>
        <span className="badge rounded-pill bg-dark" onClick= {black}  >B</span>

  </div>

</>
  )
}       


Navbar.propTypes = {
   title :  PropTypes.string.isRequired,
   aboutTitle :  PropTypes.string,
}

Navbar.defaultProps = {
   title :  'Set title here',
   aboutTitle :  'About Text here',
}