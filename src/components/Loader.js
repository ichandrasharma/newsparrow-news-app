// import React, { Component } from 'react'
import React from "react";
import loader from "./loader.gif";

// export class Loader extends Component {
const Loader = () => {
  // render() {
  return (
    <div className="text-center">
      <img className="my-3" src={loader} alt="loader" />
    </div>
  );
};
// }

export default Loader;
