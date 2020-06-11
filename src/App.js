import React, {useState, useEffect} from "react";
import "./App.css";
//import axios from "axios"
//import {NASA_URL, MY_API_KEY} from "./constants";
import HeadContainer from "./stylize/HeadContainer";
import MainContainer from "./stylize/MainContainer";
import FootContainer from "./stylize/FootContainer";

function App() {
  /*
  const [nasaObject, fromNASA] = useState({}); //Found {} use inside useState from stackoverflow.com
  //useEffect(() => {}, []);
  useEffect(() => {
    axios.get(`${NASA_URL}?api_key=${MY_API_KEY}`)
      .then(nasaData => {
        //console.log('Inside the NASA success method!'); //Testing ny debugger
        fromNASA(nasaData.data); //the image is now in nasaData.data.url, which is also nasaObject.url
        console.log(nasaData);
        console.log(nasaData.data.url);
      })
      .catch(nasaError => {
        console.log('Error occurred in getting data from NASA.');
      })
  }, []);
  */
  return (
    <div className="App">
      <HeadContainer />
      <MainContainer />
      <FootContainer />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        <div>
          <img src={nasaObject.url} />
        </div>
      </p> */}
    </div>
  );
}

export default App;
