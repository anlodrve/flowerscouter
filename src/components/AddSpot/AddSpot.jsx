import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LocationMap from '../LocationMap/LocationMap';
import "./AddSpot.css"

//mui imports 
import { Typography, Box, InputLabel, MenuItem, FormControl, FormHelperText, Select, Stack, TextField, Button } from '@mui/material';


function AddSpot() {
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const categoriesFromStore = useSelector((store) => store.categories)
    const locationFromStore = useSelector((store) => store.location)

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
        setNewSpot({ ...newSpot, [key]: event.target.value })
        console.log(newSpot);
    }

    const addSpot = (event) => {
        event.preventDefault();
        console.log('in addSpot', newSpot)
        dispatch({
            type: 'POST_SPOT',
            payload: { ...newSpot, location: locationFromStore },
        });
        history.push('/')

    }

    return (
        <Box className='addSpotForm' >
             <Typography 
             gutterBottom 
             variant='h5' 
             component='div'
             sx={{
                textAlign: 'center'
             }}
             
             >
                       Add A Spot
             </Typography>
             <Typography 
             variant='body1' 
             component='div'
             sx={{
                ml: '22px'
             }}>
             Click on the map to set the location:
             </Typography>
            <form onSubmit={addSpot}>
                <LocationMap />
                <Stack spacing={1} direction='column'>
                    <FormControl required sx={{ m: 1}}>
                        <InputLabel
                            id="selectCategory"
                            sx={{
                                ml: '15px',
                                fontSize: '20px'
                            }}
                        >Category</InputLabel>
                        <Select
                            labelId="selectCategory"
                            id="selectCategory"
                            value={newSpot.category}
                            label="Category *"
                            sx={{
                                mx: '15px'
                            }}
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
                        <FormHelperText
                            sx={{
                                fontSize: '14px',
                                ml: '15px'
                            }}>Required</FormHelperText>
                    </FormControl>
                    <Box
                        sx={{
                            mx: 'auto'
                        }}>
                        <TextField
                            label='Description'
                            variant='outlined'
                            value={newSpot.description}
                            onChange={(event) => handleChange(event, 'description')}
                            sx={{
                                fontSize: '20px',
                                ml: '20px',
                                width: '350px',
                            }}>
                        </TextField>
                        <FormHelperText
                            sx={{
                                fontSize: '15px',
                                mx: '17px',
                                mb: '20px'
                            }}>
                            Describe the plant and where to view it - i.e. "When facing the blue house, there is a large light purple lilac to the left of the front steps"
                        </FormHelperText>
                        <Button
                            type="submit"
                            variant='contained'
                            sx={{ mx: '40%' }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Stack>
            </form >
        </Box >
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