import React, { Component } from "react";

import Parent from "./Parent/Parent";

const Context = React.createContext();

class App extends Component {
  render() {
    const contextValue = {
      data: "data one",
      otherData: "some other data"
    };
    return (
      <Context.Provider value={contextValue}>
        <Parent />
      </Context.Provider>
    );
  }
}

export default App;
