//store spots returned from server
const spotsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SPOTS':
            return action.payload; 
        default:
            return state; 
    }
}

export default spotsReducer; 