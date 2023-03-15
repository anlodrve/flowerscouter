import React, { useState, useEffect, useDispatch } from 'react'; 

import "./AddSpot.css"

function AddSpot () {

    const dispatch = useDispatch();
    // const history = useHistory(); 
    // const categoriesFromRedux = useSelector((store) => store.categories)

    useEffect(() => {

    }, [])


    const [newSpot, setNewSpot] = useState({
        // lat: 0.00, 
        // lng: 0.00, 
        // category eventually
        description: '',
    })


    const addSpot = (event) => {
        event.preventDefault();
        dispatch({ 
            type: 'POST_SPOT', 
            payload: newSpot, 
            callback: setNewSpot
        });
    }

    return(
        <div className='addSpotForm'>
            <form onSubmit={addSpot}>
                <textarea label='Description' placeholder='Describe where to view this plant - i.e. "right by the door", or "from the sidewalk facing south, next to the oak tree"' type="textarea" value={newSpot.description} onChange={(event) => handleChange(event, 'description')}></textarea>
                {/* <input></input>
                <select></select> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default AddSpot; 