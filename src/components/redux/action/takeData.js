import axios from 'axios';

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

export const fetchInfo = (data) => {
    return (dispatch) => {
        dispatch(fetchInfoRequest)
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&lang=ru&appid=${API_KEY}&units=metric`)
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