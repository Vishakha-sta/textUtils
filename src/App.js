// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { render } from "react-dom";

// import {
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('white');//check wheather the mode is light or dark
  const [mode, setMode] = useState('light');//check wheather the mode is light or dark
  const [modeText, setModeText] = useState('Enable Dark Mode');
  const [alert, setAlert] =  useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      setModeText('Enable Dark Mode');
      showAlert('Dark Mode has been disabled', 'success');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
    }
    else{
      setMode("dark");
      setModeText('Disable Dark Mode');
      showAlert('Dark Mode has been enabled', 'success');
      document.body.style.backgroundColor = '#032f52';
    }
  }

  const themeColor = (themeName)=>{
    setTheme(themeName);
    document.body.style.backgroundColor = themeName ;
  }

  return (
    <>

    <Navbar title="Textutils" aboutTitle="About Textutils"  mode={mode} modeText={modeText} toggleMode={toggleMode} themeColor={themeColor} />
    <Alert alert={alert} />
    <div className="container">
    
    {/* <Routes>
          
      <Route path="/" element={ */}
      <Textform heading="Enter the text to analyse below" showAlert={showAlert} mode={mode} alert={alert} theme={theme} />
      {/* } >
      </Route>
            
      <Route  path="/about" element={<About heading="About Us"/>}  >
      </Route>
                            
    </Routes> */}

    </div>

  </>
  );
}

export default App;