import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchInfo} from "../../redux/action/takeData";

class FormTakeData extends Component {
    state = {
        dataLength: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.fetchInfo(this.state.dataLength);
    }

    handleOnChange = e => {
        const dataLength = e.target.value.replace(/[0-9]/g, '');
        this.setState({dataLength})
    }

    render() {
        const {error} = this.props.error;

        return (
            <div className="formTakeData">
                <form onSubmit={this.handleSubmit} className="formGroup">
                    <div className={`${"city-inp"}${this.state.dataLength.length ? " up" : ""}`}>
                        <input type="text" id="city" name="city" autoComplete="off" onChange={this.handleOnChange}/>
                        <label htmlFor="city">city</label>
                    </div>
                    <button type="submit" className="btn-formTakeData">find out the weather</button>
                </form>
                {Object.keys(error).length > 0 ? <p className="error">{error}</p> : ""}
            </div>
        );
    }
}

const mapStateToProps = ({takeData}) => ({error: takeData})

const mapDispatchToProps = dispatch => ({
    fetchInfo: (data) => dispatch(fetchInfo(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormTakeData);