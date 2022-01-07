import React from "react";
import dashjs from "dashjs";

function App() {
  React.useEffect(() => {
    var url = "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd";
    var player = dashjs.MediaPlayer().create();
    player.initialize(document.querySelector("#videoPlayer"), url, true);
  }, []);

  return (
    <div>
      <h1>Welcome to React App</h1>
      <h3>Date : {new Date().toDateString()}</h3>
    </div>
  );
}

export default App;
