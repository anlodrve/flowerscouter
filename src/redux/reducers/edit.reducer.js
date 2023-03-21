const editReducer = (state = {}, action ) => {
    switch (action.type) {
        case 'SET_CURRENT_SPOT':
            return action.payload[0]
        case 'EDIT_ONCHANGE':
            return {...state, [action.payload.property]: action.payload.value }
        case 'EDIT_LOCATION':
            return {...state, [action.payload.location]: action.payload.value}
        default: 
            return state
    }
}

export default editReducer