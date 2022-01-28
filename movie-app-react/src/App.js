// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import Movie from "./components/Movie"
import './App.css';
import Home from "./routes/Home"
import Detail from "./routes/Detail"
// import React from "react";
import {BrowserRouter as Router,
  Switch, Route, } from "react-router-dom";


function App() {
  return(
    <div>
      <Router>
        <Switch>
          <Route path="/movie">
            <Detail />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>   
    </div>
  );
};

export default App;


/* <Switch></Switch>
use switch to render one at one time
react router can render in double at once if i want to */


// react-router-dom v6.2.1
// <BrowserRouter>
//   <Routes>
//     <Route exact path="/" element={<Home />}></Route>
//     <Route path="/movie" element={<Detail />}></Route>
//   </Routes>
// </BrowserRouter>
