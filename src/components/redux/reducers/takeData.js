const initialState = {
    takeData: []
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
                takeData: action.payload,
                error: ''
            };
        case "FETCH_INFO_FAILURE":
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
};