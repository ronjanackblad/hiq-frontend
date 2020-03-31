
import React, { Component } from 'react';     
import './App.css';   
import FileForm from './components/FileForm';


class App extends Component {    

  render () {
    return (
          <div class="container">
              <div class="header">
                <h1>Word Counter</h1>
                <p>~ Which is your most used word?</p>
              </div>
              <div class="form-container">
                <p>This website will count the most used word in your text and add 'foo' + word + 'bar'</p>
                <FileForm></FileForm>
                <div class="info-box-container">
                  <div class="info-box">
                    <p>Did you know? <br/>Most common word in English is the word <a href="https://en.wikipedia.org/wiki/Most_common_words_in_English" target="_blank" title="https://en.wikipedia.org/wiki/Most_common_words_in_English">'the'</a></p>
                  </div>
                </div>
              </div>
              <div class="footer">
                <p>Ronja Näckblad</p>
              </div>
          </div>
 
    );
  }  
}    

export default App;  