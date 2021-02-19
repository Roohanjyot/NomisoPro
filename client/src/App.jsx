import { Component } from 'react';
import './App.css';
import React from 'react';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Modal from "./Components/TrackModal/TrackModal.jsx";
import Table from "./Components/Table/Table.jsx";
import Home from "./Components/Home/Home.jsx";
import Chart from "./Components/Chart/Chart.jsx";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShowing : false,
      currentPage: "Home",
      url: "http://localhost:3000",
      data: [],
      // refresh: 0,
      editIdx: -1
    }
  }

  showModal = e => {
    this.setState({
      modalShowing: !this.state.modalShowing
    })
  };

  pageChange = (e) => {
    let page = e.target.innerHTML;
    this.setState({
      currentPage: page
    })
  }
  
  refresh = () => {
    this.setState({
      refresh: this.state.refresh === 0 ? 1 : 0
    })
  }

  handleRemove = (i) => {
    this.setState({
      data: this.state.data.filter((x) => x._id !== i)
    }) 
    // handle the remove in the cloud
    axios({
      method: 'delete',
      url: `${this.state.url}/weatherData`,
      data: {
        _id : i
      }
    })
    .then (() => console.log("item deleted"))
    .catch((err) => console.error(err))
  }

  startEditing = (i) => {
    this.setState({
      editIdx: i
    })
  }

  stopEditing = (i) => {
    this.setState({
      editIdx: -1
    })
    // handle the change in the cloud
    axios({
      method: 'patch',
      url: `${this.state.url}/weatherData`,
      data: {
        city : this.state.data.filter((x) => x._id === i)
      }
    })
    .then ((res) => {
      this.componentDidMount();
    })
    .catch((err) => console.error(err))
  }
  
  handleChange = (e, name, i) => {
    let {value} = e.target;
    let objConstructor = (obj, arr, val) => {
      if (arr.length === 1) {
          if (Number(val[0])) {
            obj[arr[0]] = Number(val);
          } else  {
            obj[arr[0]] = val;
          }
      } else {
        if (Number(val[0])) {
          obj[arr[0]][arr[1]] = Number(val);
        } else  {
          obj[arr[0]][arr[1]] = val;
        }
      }
      return obj;
    } 
    this.setState({
      data: this.state.data.map((row, j) => j === i ? objConstructor(row, name, value) : row)
    })
  }

  chartDataSorter = (arr) => {
    let outputArr = [];
    arr.map((x) => {
      outputArr.push ({
        max_temp: (x.main.temp_max - 273).toFixed(2),
        min_temp: (x.main.temp_min - 273).toFixed(2),
        current_temp: (x.main.temp - 273).toFixed(2),
        name: x.name,
        id: x._id
      })
    })
    return outputArr;
  }

  componentDidMount = () => {
    axios({
      method: 'get',
      url: `${this.state.url}/weatherData`,
    })
    .then(res => {
      this.setState({
        data : res.data
      })
    })
    .catch(err => console.error(err))
  }

  render() { 
    return (
      <div className="App">
        <Navbar 
          showModal={this.showModal} 
          pageChange={this.pageChange}
        />
        <Modal 
          modalShowing={this.state.modalShowing} 
          showModal={this.showModal} 
          url={this.state.url}
          reload={this.componentDidMount}
        />
        <Table 
          currentPage={this.state.currentPage} 
          header={['City', 'Weather', 'Temp. Now', 'Feels Like', 'Temp. Max', 'Temp. Min', 'Humidity', 'Wind', 'Last Updated']} 
          data={this.state.data}
          // refresh={this.state.refresh}
          handleRemove={this.handleRemove}
          startEditing={this.startEditing}
          editIdx={this.state.editIdx}
          handleChange={this.handleChange}
          stopEditing={this.stopEditing}
        />
        <Home 
          currentPage={this.state.currentPage}
        />
        <Chart currentPage={this.state.currentPage} data={this.chartDataSorter(this.state.data)}/>
      </div>
    );
  }
}

export default App;
