import React, { Component } from 'react';
import $ from 'jquery';
import "./Home.css";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (this.props.currentPage !== "Home") {
            return null;
        }
        return (
            <div className="home">
                <h1>Hi, Hope You Like My Project. (Hint: try to resize the window!)</h1>
                
            </div>
        )
    }
}
