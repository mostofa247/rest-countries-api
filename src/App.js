import './App.css';
import React from 'react';
import Countries from './components/Countries';
import Header from './components/Header';
import Filter from './components/Filter';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Country from './components/Country';


function App() {
  return (
    <Router>
      <Header></Header>
      <Route exact path="/">
        <Filter></Filter>
        <Countries></Countries>
      </Route>
      <Route path="/countries/:name" children={<Country></Country>}></Route>
    </Router>
  );
}

export default App;
