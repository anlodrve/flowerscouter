import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

//mui imports
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'

//import comments
import CommentList from '../Comments/CommentList';

function ListOfSpots() {

    const dispatch = useDispatch();
    const spotsFromStore = useSelector(store => store.spots)
    console.log('spots', spotsFromStore)

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
                            width='350px'
                            pl='20px'>
                            <Card
                                sx={{
                                    mb:'20px'
                                }}
                                >
                                <CardMedia 
                                    component='img'
                                    height='50'
                                    image='https://source.unsplash.com/random'
                                    alt='flower image'
                                />
                                <CardActions >
                                    <Button size='small'>Like</Button>
                                </CardActions>
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                    {spot.name}
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        Description: {spot.description}
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary'>
                                        Submitted By: {spot.username}
                                    </Typography>
                                </CardContent>
                                <CommentList comments={spot.comments} username={spot.username} postId={spot.id}/>
                            </Card>
                        </Box>
                    </>
                )
            })}
 
        </div>
    )

}

export default ListOfSpots;