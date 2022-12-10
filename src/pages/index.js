import React from 'react';
import conf from "../../conf";
import 'bootstrap/dist/css/bootstrap.min.css';

const { spotifyAuthUrl, spotifyClientId, spotifyClientSecret, spotifyScopes, redirectUrl } = conf.getConf();

const generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

async function spotifyLogin() {
  var state = generateRandomString(16);
  return fetch(`https://accounts.spotify.com/authorize?response_type=code`
    +`&client_id=${spotifyClientId}`,
    +`&scope=${spotifyScopes}`,
    +`&redirect_uri=${redirectUrl}`,
    +`&state=${state}`,
    );
}

async function App() {
  // const resp = await spotifyLogin();
  // console.log(resp);

  return (
    <div id='___gatsby' className="app">
         <h1 className='img-text-1'>Experience You Can Trust.</h1>
      <h1> TEST </h1>
    </div>
  );
}

export default App;