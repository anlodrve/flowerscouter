import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import LocationMap from '../LocationMap/LocationMap';

import "./AddSpot.css"

function AddSpot () {
    useEffect(() => {
        dispatch({ type: "GET_CATEGORIES" });
    }, [])

    const dispatch = useDispatch();
    // const history = useHistory(); 
    const categoriesFromStore = useSelector((store) => store.categories)
    const locationFromStore = useSelector((store)=> store.location)
    console.log('locationFromStore', locationFromStore)

    const [newSpot, setNewSpot] = useState({
        // category eventually
        description: '',
    })

    const handleChange = (event, key) => {
        //key is a string value from the input
        console.log('before setNewSpot', locationFromStore)
        setNewSpot({...newSpot, [key]: event.target.value})
        console.log(newSpot);
    }

    const addSpot = (event) => {
        event.preventDefault();
        console.log('in addSpot', newSpot)
        dispatch({ 
            type: 'POST_SPOT', 
            payload: {...newSpot, location: locationFromStore}, 
        });
    }

    return(
        <div className='addSpotForm'>
            <form onSubmit={addSpot}>
                <textarea 
                    label='Description' 
                    placeholder='Describe where to view this plant - i.e. "right by the door", or "from the sidewalk facing south, next to the oak tree"' 
                    type="textarea" 
                    value={newSpot.description} 
                    onChange={(event) => handleChange(event, 'description')}>
                </textarea>
                <select className='catDropDown' onChange={(event) => handleChange(event, 'category_id')}>
                    {categoriesFromStore.map((categoryObject) => (
                        <option key={categoryObject.id} value={categoryObject.id}>
                            {categoryObject.category}
                        </option>
                    ))}
                </select>
                 <LocationMap />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddSpot; 