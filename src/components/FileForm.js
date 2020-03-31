import React, { useState } from "react";
import Axios from 'axios';

/**
 * Component for handling the API request via a form, and saves the response in state
 */
function FileForm() {
    const [file, setFile] = useState(null);
    const [text, setText] = useState("");
    const [mostUsedWord, setMostUsedWord] = useState("");
    const [freq, setFreq] = useState(null);

    const fileSelectedHandler = event => {
        setFile(event.target.files[0]);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const fd = new FormData();
        fd.append('file', file, file.name);
        Axios.post('https://localhost:5001/Home/SingleFile', fd)
          .then(res => {
            console.log(res);
            setText(res.data.text);
            setMostUsedWord(res.data.mostUsedWord);
            setFreq(res.data.frequencies);
          });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="file-and-upload-container">
                    <label for="file-upload" id="file-label">Choose file...</label>
                    <input
                        id="file-upload"
                        input type="file"
                        accept=".rtf,.txt,.md,.file"
                        onChange={fileSelectedHandler}
                    />
                <button type="submit" class="upload-button">Upload</button>
                </div>
                <div class="text-container"> 
                    { text ? (
                        <pre class="text-box-after">{text}</pre>
                    ) : (
                        <p class="text-box-before">Displaying text here...</p>
                    )}
                    
                </div>
            </form>
        </div>   
    );
}


export default FileForm;