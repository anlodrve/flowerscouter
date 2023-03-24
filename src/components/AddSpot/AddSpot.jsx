import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LocationMap from '../LocationMap/LocationMap';
import "./AddSpot.css"

//mui imports 
import {Box, InputLabel, MenuItem, FormControl, FormHelperText, Select, Stack, TextField, Button } from '@mui/material';


function AddSpot () {
    const user = useSelector((store) => store.user);
    const history = useHistory(); 
    const dispatch = useDispatch();
    const categoriesFromStore = useSelector((store) => store.categories)
    const locationFromStore = useSelector((store)=> store.location)

    // console.log('catgories from store', categoriesFromStore)


    useEffect(() => {
        dispatch({ type: "GET_CATEGORIES" });
    }, [])

    const [newSpot, setNewSpot] = useState({
        description: '',
        author: user.id,
        category: 0,
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

    return(
        <Box className='addSpotForm' onSubmit={addSpot}>
             <LocationMap />
            <Stack spacing={4}>
                <Stack direction='row' spacing={0}>
                    <TextField label='Description' variant='outlined'></TextField>
                    <FormHelperText>Describe where to view this plant - i.e. "When facing the house, it is to the left of the front door by the pine tree"</FormHelperText>
                    <Box>
                        <FormControl required sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="selectCategory">Category</InputLabel>
                                <Select
                                    labelId="selectCategory"
                                    id="selectCategory"
                                    value = {newSpot.category}
                                    label="Category *"
                                    onChange={(event) => handleChange(event, 'category')}
                                >
                                    {categoriesFromStore.map((categoryObject) => (
                                        <MenuItem 
                                            key={categoryObject.id} 
                                            value={categoryObject.id}
                                        >
                                            {categoryObject.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Box>
                </Stack>
                <Stack direction='row' spacing={0}>
                </Stack>
            </Stack>
            
            <Button type="submit" variant='contained'>
                Submit
            </Button>
            
        </Box>
    )
}

export default AddSpot; 


/* <form >
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
                            {categoryObject.name}
                        </option>
                    ))}
                </select>
                
                <button type="submit">Submit</button>
            </form> */