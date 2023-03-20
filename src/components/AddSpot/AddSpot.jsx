import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LocationMap from '../LocationMap/LocationMap';

import "./AddSpot.css"

function AddSpot () {
    const user = useSelector((store) => store.user);
    const history = useHistory(); 
    const dispatch = useDispatch();
    const categoriesFromStore = useSelector((store) => store.categories)
    console.log('catgories from store', categoriesFromStore)
    const locationFromStore = useSelector((store)=> store.location)

    useEffect(() => {
        dispatch({ type: "GET_CATEGORIES" });
    }, [])

    const [newSpot, setNewSpot] = useState({
        // category eventually
        description: '',
        author: user.id
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
        history.push('/')

    }

    console.log()

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
                <select className='catDropDown' onChange={(event) => handleChange(event, 'category')}>
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