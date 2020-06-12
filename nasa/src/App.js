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

  const myStyles = function() {
    return {
      h1: {
        textAlign: 'center'
      },

      h2: {
        margin: '5px'
      },

      hr: {
        width: '98%',
        border: '1px solid black'
      },

      nav: {
        width: '98%',
        margin: '5px',
        display: 'flex',
        justifyContent: 'space-between'
      },

      a: {
        margin: '5px'
      },

      section: {
        margin: '5px 0',
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-around'
      },

      divLeft: {
        width: '49%'
      },

      divRight: {
        width: '49%',
        height: '500px',
        border: '2px solid #000080',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
      },

      img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      },

      p1: {
        margin: '5px'
      },

      p2: {
        margin: '5px',
        textAlign: 'left'
      },

      p3: {
        textAlign: 'center'
      },

      footer: {
        position: 'absolute',
        left: '0',
        bottom: '0',
        width: '100%',
        height: '70px',
        backgroundColor: '#4D4E4F',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    }
  }

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
        <h1 style={myStyles().h1}>NASA Image of the Day</h1>
        <nav style={myStyles().nav}>
          <div>
            <a href="http://www.google.com" style={myStyles().a}>Home</a>
            <a href="http://www.google.com" style={myStyles().a}>About</a>
          </div>
          <div>
            <a href="http://www.google.com" style={myStyles().a}>Sign-In</a>
          </div>
        </nav>
      </header>
      <hr style={myStyles().hr}></hr>
      <section className="imageContent" style={myStyles().section}>
        <div className="imageDiv" style={myStyles().divLeft}>
          <img src={nasaObject.url} alt={nasaObject.title} style={myStyles().img} />
        </div>
        <div class="contentDiv" style={myStyles().divRight}>
          <h2 style={myStyles().h2}>{nasaObject.title}</h2>
          <p style={myStyles().p1}>Date: {nasaObject.date}</p>
          <p style={myStyles().p2}>{nasaObject.explanation}</p>
        </div>
      </section>
      <footer style={myStyles().footer}>
        <p style={myStyles().p3}>Page created by: Peter Wood - June 11, 2020</p>
      </footer>
    </div>
  );
}

export default App;
