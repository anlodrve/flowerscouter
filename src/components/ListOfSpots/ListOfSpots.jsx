import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';


function ListOfSpots() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: GET_SPOTS})
    })

}