import "./App.css";
// import React, { Component } from "react";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {
const App = () => {
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWSPARROW_API;

  const [progress, setProgress] = useState(0);

  // state = {
  //   progress: 0
  // }

  // setProgress = (progress) => {
  //   setState({progress: progress})
  // }

  // render() {
    return (
      <Router>
        <div>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={setProgress} pageSize={pageSize}
              apiKey = {apiKey} key='general' country="in" category="general" />}
            ></Route>
            <Route
              exact
              path="/science"
              element={<News setProgress={setProgress} pageSize={pageSize}
              apiKey = {apiKey} key='science' country="in" category="science" />}
            ></Route>
            <Route
              exact
              path="/technology"
              element={<News setProgress={setProgress} pageSize={pageSize}
              apiKey = {apiKey} key='technology' country="in" category="technology" />}
            ></Route>
            <Route
              exact
              path="/business"
              element={<News setProgress={setProgress} pageSize={pageSize}
              apiKey = {apiKey} key='business' country="in" category="business" />}
            ></Route>
            <Route
              exact
              path="/sports"
              element={<News setProgress={setProgress} pageSize={pageSize}
              apiKey = {apiKey} key='sports' country="in" category="sports" />}
            ></Route>
            <Route
              exact
              path="/health"
              element={<News setProgress={setProgress} pageSize={pageSize}
              apiKey = {apiKey} key='health' country="in" category="health" />}
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={setProgress} pageSize={pageSize}
                apiKey = {apiKey} key='entertainment' country="in" category="entertainment" />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  // }
}

export default App;