import React from "react";
import ReactDom from "react-dom";
import axios from "axios";
import "./TrackModal.css";

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cityName : "",
            zipCode : "",
            country : ""
        };
        this.baseState = this.state;
    }


    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name] : value
        })
        // console.log(this.state)
    }

    onSubmit = e => {
        // console.log(this.props.showModal);
        e.preventDefault();
        if (this.state.cityName) {
            axios({
                method: 'post',
                url: `${this.props.url}/weatherData`,
                data: this.state
            })
            .then(res => console.log(res));
        }
        this.setState(this.baseState);
        this.props.showModal();
        this.props.reload();
    }

    render() {
        if (!this.props.modalShowing) {
            return null;
        }
        return ReactDom.createPortal(
            <div className="TrackModal">
                <form>
                    <label className={"modal-label"}>
                        <input name="cityName" type="text" placeholder="City Name" onChange={this.handleChange} value={this.state.cityName} className={"modal-input"}/>
                        <input name="zipCode" type="number" placeholder="Zip Code" onChange={this.handleChange} value={this.state.zipCode} className={"modal-input"}/>
                        <input name="country" type="text" placeholder="Country" onChange={this.handleChange} value={this.state.country} className={"modal-input"}/>
                        <input type="submit" onClick={this.onSubmit} className={"modal-input-btn"}/>
                        <input type="submit" value="Cancel" onClick={this.onSubmit} className={"modal-input-btn"}/>
                    </label>
                </form>
            </div>,
        document.getElementById("portal"))
    }
}

export default Modal;