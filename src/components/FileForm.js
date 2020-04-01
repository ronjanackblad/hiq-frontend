import React, { useState } from "react";
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Component for handling the API request via a form, and saves the response in state
 */
function FileForm() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [mostUsedWord, setMostUsedWord] = useState("");
  const [freq, setFreq] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileSelectedHandler = event => {
    setFile(event.target.files[0]);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true)
    const fd = new FormData();
    fd.append('file', file, file.name);
    Axios.post('https://localhost:5001/Home/SingleFile', fd)
      .then(res => {
        console.log(res);
        setText(res.data.text);
        setMostUsedWord(res.data.mostUsedWord);
        setFreq(res.data.frequencies);
        setLoading(false)
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="input-group mb-3">
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile02" type="file"
              accept=".rtf,.txt,.md,.file"
              onChange={fileSelectedHandler} />
            <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
          </div>
          <div class="input-group-append">
            <button class="input-group-text" type="submit" id="inputGroupFileAddon02">Upload</button>
          </div>
        </div>
      {text ? (
        <p className="most-used-word p-1">Your most used word is: { mostUsedWord} <br /> It was used { freq} times!</p>
      ) : (
          <div></div>
        )}
      <div className="container mt-3 overflow-auto">
        {text ? (
          <pre>{text}</pre>
        ) : (
            <p className="text-box-before"> {loading ?
              <div class="spinner-border text-success" role="status">
                <span class="sr-only">Loading...</span>
              </div > : 'Displaying text here...'}</p>
          )}

      </div>
      </form>
    </div >
  );
}


export default FileForm;