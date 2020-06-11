import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
          <img src="" alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
        <div class="contentDiv" style={{width: '49%', height: '500px', border: '2px solid #000080', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start'}}>
          <h2 style={{margin: '5px'}}>2nd Header</h2>
          <p style={{margin: '5px'}}>Date</p>
          <p style={{margin: '5px'}}>Explanation</p>
        </div>
      </section>
      <footer style={{position: 'absolute', left: '0', bottom: '0', width: '100%', height: '70px', backgroundColor: '#4D4E4F', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <p style={{textAlign: 'center'}}>Page created by: Peter Wood - June 11, 2020</p>
      </footer>
    </div>
  );
}

export default App;
