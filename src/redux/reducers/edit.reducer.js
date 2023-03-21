const editReducer = (state = {}, action ) => {
    switch (action.type) {
        case 'SET_CURRENT_SPOT':
            return action.payload
        case 'EDIT_ONCHANGE':
            return {...state, [action.payload.property]: action.payload.value }
        default: 
            return state
    }
}

export default editReducer