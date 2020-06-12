import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {NASA_URL, MY_API_KEY} from "./constants";

function App() {
  const [nasaObject, fromNASA] = useState({});
  useEffect(() => {
    axios.get(`${NASA_URL}?api_key=${MY_API_KEY}`)
      .then(nasaData => {
        fromNASA(nasaData.data); //the image is now in nasaData.data.url, which is also nasaObject.url
        console.log(nasaData);
        console.log(nasaData.data.url);
      })
      .catch(nasaError => {
        console.log('Error occurred in getting data from NASA.');
      })
  }, []);
  /*
  const myStyles = function() {
    return {
      //
    }
  }
  */

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header>
        <h1 style={{textAlign: 'center'}}>NASA Image of the Day</h1>
        <nav style={{width: '98%', margin: '5px', display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <a href="http://www.google.com" style={{margin: '5px'}}>Home</a>
            <a href="http://www.google.com" style={{margin: '5px'}}>About</a>
          </div>
          <div>
            <a href="http://www.google.com" style={{margin: '5px'}}>Sign-In</a>
          </div>
        </nav>
      </header>
      <hr style={{width: '98%', border: '1px solid black'}}></hr>
      <section className="imageContent" style={{margin: '5px 0', width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-around'}}>
        <div className="imageDiv" style={{width: '49%'}}>
          <img src={nasaObject.url} alt={nasaObject.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
        <div class="contentDiv" style={{width: '49%', height: '500px', border: '2px solid #000080', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start'}}>
          <h2 style={{margin: '5px'}}>{nasaObject.title}</h2>
          <p style={{margin: '5px'}}>Date: {nasaObject.date}</p>
          <p style={{margin: '5px', textAlign: 'left'}}>{nasaObject.explanation}</p>
        </div>
      </section>
      <footer style={{position: 'absolute', left: '0', bottom: '0', width: '100%', height: '70px', backgroundColor: '#4D4E4F', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <p style={{textAlign: 'center'}}>Page created by: Peter Wood - June 11, 2020</p>
      </footer>
    </div>
  );
}

export default App;
