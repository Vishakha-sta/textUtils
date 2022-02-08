import React, {useState} from 'react'

// change class to className 
// change for to htmlFor
// close all the open tags or single closing tags by double tag

export default function Textform(props){
    function capitalize(word) {
        var str = word.split(" ");
        var newWord = "";
        for (let i = 0; i < str.length; i++) {
            const lower = str[i].toLowerCase();
            newWord = newWord + str[i].charAt(0).toUpperCase() + lower.slice(1);
            newWord = newWord + " ";
        }
        return newWord;
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text has been converted to Upper Case', 'info');
    }
    const handleCapitalizeClick = ()=>{
        let newText = capitalize(text);
        setText(newText);
        props.showAlert('Text has been converted to Capitalize Text', 'info');
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text has been converted to Lower Case', 'info');
    }
    const handleRepeatClick = ()=>{
        let newText = text.repeat(2);
        setText(newText);
        props.showAlert('Text has been duplicated', 'info');
    }
    const handleExtraSpacesClick = ()=>{
        // remove extra spaces
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces has been removed', 'info');
        
    }
    const handleTrimClick = ()=>{    
        // this will remove extra spaces from the extremes only
        let newText = text.trim();
        setText(newText);
        props.showAlert('Text has been Trimed', 'info');
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert('Textarea has been cleared', 'info');
    }
    const handleCopyClick = ()=>{
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text has been Copied to clipbooard', 'info');
    }

    const handleOnchange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    return(
        <>
        <div className="container">
            <h1 className={`${props.theme}`} > {props.heading} </h1>
            {/* ${props.mode === `light` ? `text-dark`: `text-light`} */}

            <div className={`form-floating  ${props.theme}`} >
            {/* style={{ color:props.mode === 'dark'?'white':'black'}} */}

                <textarea className={`form-control my-3`}  value = {text} onChange={handleOnchange}   placeholder="Leave a comment here" id="MyBox" rows="8" ></textarea>
                
                {/*   className =>     ${props.theme} ${props.mode === `light`? `text-dark`: `text-light`} */}
                {/* style={{backgroundColor:props.mode === 'dark'?'#032f52':'white', color:props.mode === 'dark'?'white':'black'}} */}


                <label htmlFor="MyBox" style={{color : 'black'}} >Comment</label>

                <button className=" btn btn-success m-2" onClick = {handleUpClick}>Convert to upper case</button>
                <button className=" btn btn-success m-2" onClick = {handleLowClick}>Convert to lower case</button>
                <button className=" btn btn-success m-2" onClick = {handleCapitalizeClick}>Capitalize</button>
                <button className=" btn btn-success m-2" onClick = {handleExtraSpacesClick}>Remove Extra Spaces</button>
                <button className=" btn btn-success m-2" onClick = {handleRepeatClick}>Repeat</button>
                <button className=" btn btn-success m-2" onClick = {handleTrimClick}>Trim</button>
                <button className=" btn btn-success m-2" onClick = {handleCopyClick}>Copy</button>
                <button className=" btn btn-success m-2" onClick = {handleClearClick}>Clear</button>
            </div>
        </div>
        <div className={`container my-3 ${props.theme}`} >
        {/* style={{ color:props.mode === 'dark'?'white':'black'}} */}
            <h2>Text summary</h2>
            <p>There are {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{text.split(" ").length * 0.008} minutes read</p>
            <h2>Preview</h2>
            <p className="previewText">{text.length>0?text:'Please enter something in textbox'}</p>
        </div>
        </>
    )
}