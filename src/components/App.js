import React from "react";
import OptionTile from "./OptionTile";
import Header from "./Header";
import ".././styles.css";

var contentJSON = require("../assets/content/page-content.json"); // forward slashes will depend on the file location
var contentImages = [
  require("../assets/images/book-a-scan.png"),
  require("../assets/images/buy-a-kit.png")
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header headercontent={contentJSON.heading} />
        <div className="options-container">
          <OptionTile
            tilecontent={contentJSON.optiontile[0]}
            image={contentImages[0]}
          />
          <OptionTile
            tilecontent={contentJSON.optiontile[1]}
            image={contentImages[1]}
          />
        </div>
      </div>
    );
  }
}

export default App;
