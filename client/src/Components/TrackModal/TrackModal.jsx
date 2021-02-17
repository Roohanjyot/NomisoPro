import React from "react";

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cityName : "",
            zipCode : "",
            country : ""
        };
    }

    handleChange (e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name] : value
        })
        // console.log(this.state)
    }

    onSubmit = e => {
        console.log(this.props.showModal);
        e.preventDefault();
        this.props.showModal();
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="TrackModal">
                <form>
                    <label>
                        City Name: 
                        <input name="cityName" type="text" onChange={this.handleChange} value={this.state.cityName} />
                        Zip Code: 
                        <input name="zipCode" type="number" onChange={this.handleChange} value={this.state.zipCode} />
                        Country: 
                        <input name="country" type="text" onChange={this.handleChange} value={this.state.country} />
                        <input type="submit" onClick={this.onSubmit}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default Modal;