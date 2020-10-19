import axios from 'axios';

export const takeInfoForm = value => ({
    type: "TAKE_INFO_FORM",
    payload: value
})

export const fetchInfoRequest = () => ({
    type: "FETCH_INFO_REQUEST"
})

export const fetchInfoSuccess = data => ({
    type: "FETCH_INFO_SUCCESS",
    payload: data
})

export const fetchInfoFailure = error => ({
    type: "FETCH_INFO_FAILURE",
    payload: error
})

const API_KEY = "dddf9f35ba14b846f68ac0564bb924d8";
const city = "london";

export const fetchInfo = () => {
    return (dispatch) => {
        dispatch(fetchInfoRequest)
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => {
                const data = response.data;
                dispatch(fetchInfoSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchInfoFailure(errorMsg))
            })
    }
}