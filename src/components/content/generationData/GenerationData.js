import React, {Component} from 'react';
import {connect} from "react-redux";

class GenerationData extends Component {
    render() {
        const {takeData} = this.props.takeData;
        const {error} = this.props.error;

        const objKeys = Object.keys(error).length > 0;
        const objKeysData = Object.keys(takeData).length === 0;
        const imgUrl = `http://openweathermap.org/img/wn/${takeData.weather_icon}@2x.png`;

        return (
            <div className="generationData">
                {objKeys || objKeysData ? " " : <div className="wrap">
                        <div className="title">
                            {takeData.city} {takeData.country}
                        </div>
                        <div className="description-weather">
                            <div className="icon">
                                {typeof (takeData.weather_icon) != "undefined" ? <img src={imgUrl} alt="icon"/> : ""}
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
                    </div>}
            </div>
        );
    }
}

const mapStateToProps = ({takeData}) => ({
    takeData: takeData,
    error: takeData
})

export default connect(mapStateToProps, null)(GenerationData);