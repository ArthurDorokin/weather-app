import React, {Component} from 'react';
import {connect} from "react-redux";

class GenerationData extends Component {
    render() {
        const {takeData} = this.props.takeData;
        const {error} = this.props.error;
        console.log(Object.keys(error).length);
        const img_url = `http://openweathermap.org/img/wn/${takeData.weather_icon}@2x.png`

        return (
            {Object.keys(error).length > 0 ? <div>booom</div> : ""}
            <div className="generationData">
                <div className="title">
                    {takeData.city} {takeData.country}
                </div>
                <div className="description-weather">
                    <div className="icon">
                        {typeof (takeData.weather_icon) != "undefined" ? <img src={img_url}/> : ""}

                        {/*{Object.keys(error).length > 0 ? <p className="error">{error}</p> : ""}*/}
                    </div>
                    <div className="description">{takeData.weather_desc}</div>
                </div>
                <div className="weather">
                    <div className="weather-main">{takeData.temp}</div>
                    <div className="weather-min-max">
                        <div className="weather-min">{takeData.temp_max}</div>
                        <div className="weather-max">{takeData.temp_min}</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({takeData}) => ({
    takeData: takeData,
    error: takeData
})

export default connect(mapStateToProps, null)(GenerationData);