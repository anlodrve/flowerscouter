//store spots returned from server
const spotsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SPOTS':
            return action.payload; 
        case 'SET_SPOTS_BY_USERID':
            return action.payload
        default:
            return state; 
    }
}

export default spotsReducer; 