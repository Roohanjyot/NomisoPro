import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        if (this.props.currentPage !== "Home") {
            return null;
        }
        return (
            <div>
                Home
            </div>
        )
    }
}
