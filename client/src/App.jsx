import { Component } from 'react';
import './App.css';
import React from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Modal from "./Components/TrackModal/TrackModal.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show : false,
      url: "http://localhost:3000"
    }
  }

  showModal = e => {
    // console.log("Hi");
    this.setState({
      show: !this.state.show
    })
    // console.log(this.state)
  };

  render() {
    return (
      <div className="App">
        <Navbar showModal={this.showModal}/>
        <Modal show={this.state.show} showModal={this.showModal} url={this.state.url}/>
      </div>
    );
  }
}

export default App;