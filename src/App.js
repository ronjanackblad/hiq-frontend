
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';   
import FileForm from './components/FileForm';

const App = () => {
  return (
    <div class="container py-3">
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 p-2 shadow-lg p-3 mb-5 bg-white rounded">
        <div class="header">
          <h1>Word Counter</h1>
          <p>~ Which is your most used word?</p>
        </div>
        <div>
          <p>This website will count the most used word in your text and add 'foo' + word + 'bar'</p>
          <FileForm></FileForm>
          <div>
            <div className="info-box rounded p-1 mt-2">
              <p>Did you know? <br />Most common word in English is the word <a href="https://en.wikipedia.org/wiki/Most_common_words_in_English" target="_blank" title="https://en.wikipedia.org/wiki/Most_common_words_in_English">'the'</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}

export default App;  