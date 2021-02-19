import React, { Component } from 'react';
// import { Button } from "../Button";
import "./Navbar.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
    }

    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Nomiso</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a className={"nav-link"} href={"#"}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a className={"nav-link"} href={"#"}>
                            Table View
                        </a>
                    </li>
                    <li onClick={this.props.showModal}>
                        <a className={"nav-link"} href={"#"}>
                            Track
                        </a>
                    </li>
                    <li>
                        <a className={"nav-link"} href={"#"}>
                            Chart View
                        </a>
                    </li>
                </ul>
                {/* <Button>Click me</Button> */}
            </nav>
        )
    }
}

export default Navbar