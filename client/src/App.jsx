import { Component } from 'react';
import './App.css';
import React from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
