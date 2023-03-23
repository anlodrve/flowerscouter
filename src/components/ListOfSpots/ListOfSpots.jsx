import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

//mui imports
import { Box, Card, CardContent, Typography } from '@mui/material'


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
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                    {spot.name}
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary'>
                                        Description: {spot.description}
                                       

                                    </Typography>

                                </CardContent>
                            </Card>
                        </Box>
                    </>
                )
            })}
 
        </div>
    )

}

export default ListOfSpots;