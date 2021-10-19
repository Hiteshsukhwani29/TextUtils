import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("")
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showalert("Converted to Uppercase", "success")
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showalert("Converted to Lowercase", "success")
  }

  const handleclear = () => {
    let newText = "";
    setText(newText)
    props.showalert("Text Clear", "success")
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied to clipboard", "success")

  }

  const handleExtraSpaces = () => {
    setText(text.replaceAll(/\s/g, ''))
    props.showalert("Extra space removed", "success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'Black' }}>

        <div className="mb-3 mt-2" >
          <h3>{props.Heading}</h3>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? '#292b2c' : 'white', color: props.mode === 'dark' ? 'white' : 'Black' }}
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert To Upercase</button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Convert To Lowercase</button>
          <button className="btn btn-primary my-3 " onClick={handleclear}>Clear Text</button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary my-3" onClick={handleExtraSpaces}>Remove Extra Space</button>

        </div>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'Black' }}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Word {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something in the textbox above to preview it"}</p>

      </div>
    </>
  );
}
