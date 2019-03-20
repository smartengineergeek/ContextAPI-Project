import React from "react";

import GrandChild from "./GrandChild/GrandChild";

const Context = React.createContext();

const Child = props => (
  <Context.Consumer>{({ data, otherData }) => <GrandChild />}</Context.Consumer>
);

export default Child;
