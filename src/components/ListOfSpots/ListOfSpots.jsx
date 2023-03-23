import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

//mui imports
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'


function ListOfSpots() {

    const dispatch = useDispatch();
    const spotsFromStore = useSelector(store => store.spots)

    //load all spots from the list on page load
    useEffect(() => {
        dispatch({ type: 'GET_SPOTS' });
    }, []);

    return (
        <div className='listOfSpots'>
            {spotsFromStore.map(spot => {
                return (
                    <>
                    {console.log(spot)}
                        <Box 
                            key={spot.id}
                            width='300px'>
                            <Card>
                                <CardMedia 
                                    component='img'
                                    height='50'
                                    image='https://source.unsplash.com/random'
                                    alt='flower image'
                                />
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                    {spot.name}
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary'>
                                        Description: {spot.description}
                                    </Typography>
                                </CardContent>
                                <CardActions >
                                    <Button size='small'>Like</Button>
                                    <Button size='small'>Comments</Button> 
                                </CardActions>
                            </Card>
                        </Box>
                    </>
                )
            })}
 
        </div>
    )

}

export default ListOfSpots;