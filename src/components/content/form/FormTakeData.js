import React, {Component} from 'react';
import {connect} from "react-redux";
import {takeInfoForm, fetchInfo} from "../../redux/action/takeData";

class FormTakeData extends Component {
    componentDidMount() {
        this.props.fetchInfo();
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            "city": e.target.elements.city.value,
            "country": e.target.elements.country.value
        }
        this.props.takeInfoForm(data);
    }

    render() {
        const {takeData} = this.props.takeData;
        console.log(takeData);
        return (
            <div className="formTakeData">
                <form onSubmit={this.handleSubmit} className="formGroup">
                    <div className="city-inp">
                        <input type="text" id="city" name="city" autoComplete="off"></input>
                        <label htmlFor="city">city</label>
                    </div>
                    <div className="country-inp">
                        <input type="text" id="country" name="country" autoComplete="off"></input>
                        <label htmlFor="country">country</label>
                    </div>
                    <button type="submit" className="btn-formTakeData">find out the weather</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({takeData}) => ({takeData: takeData})

const mapDispatchToProps = dispatch => ({
    takeInfoForm: (value) => dispatch(takeInfoForm(value)),
    fetchInfo: () => dispatch(fetchInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(FormTakeData);