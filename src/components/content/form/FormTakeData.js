import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchInfo} from "../../redux/action/takeData";

class FormTakeData extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const data = e.target.elements.city.value;
        this.props.fetchInfo(data);
    }

    render() {
        const {error} = this.props.error;

        return (
            <div className="formTakeData">
                <form onSubmit={this.handleSubmit} className="formGroup">
                    <div className="city-inp">
                        <input type="text" id="city" name="city" autoComplete="off"></input>
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