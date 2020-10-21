const initialState = {
    takeData: {},
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_INFO_REQUEST":
            return {
                ...state
            }
        case "FETCH_INFO_SUCCESS":
            return {
                ...state,
                takeData:
                    {"city":        action.payload.name,
                    "country":      action.payload.sys.country,
                    "weather_icon": action.payload.weather[0].icon,
                    "weather_desc": action.payload.weather[0].description,
                    "weather_id": action.payload.weather[0].id,
                    "temp":         action.payload.main.temp,
                    "feels_like":   action.payload.main.feels_like,
                    "temp_min":     action.payload.main.temp_min,
                    "temp_max":     action.payload.main.temp_max,
                    "pressure":     action.payload.main.pressure,
                    "humidity":     action.payload.main.humidity,
                    "wind_speed":   action.payload.wind.speed,
                    },
                error: ''
            };
        case "FETCH_INFO_FAILURE":
            return {
                ...state,
                error: 'Данного города НЕ существует !'
            }
        default: return state;
    }
};