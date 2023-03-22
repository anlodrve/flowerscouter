//store selected marker on MainMap
const infoWindowReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MARKER_INFOWINDOW':
            return action.payload; 
        default:
            return state; 
    }
}

export default infoWindowReducer; 