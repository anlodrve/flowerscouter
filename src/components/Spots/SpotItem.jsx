
import React, { useState } from 'react';

//import comments
import CommentList from '../Comments/CommentList';

//mui imports
import { Box, Card, CardContent, Typography, CardActions, IconButton, CardMedia } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'


function SpotItem({spot}) {

    const [isLiked, setIsLiked] = useState(false)

    return (
        <Box
            key={spot.id}
            width='350px'
            pl='20px'>
            <Card
                sx={{
                    mb: '20px'
                }}
            >
                <CardMedia
                    component='img'
                    height='50'
                    image='https://source.unsplash.com/random'
                    alt='flower image'
                />
                <CardActions >
                    {isLiked === true ? (
                        <IconButton color="primary" aria-label="like button" onClick={() => setIsLiked(false)}>
                            <Favorite />
                        </IconButton>
                    ) : (
                        <IconButton color="primary" aria-label="not yet liked button" onClick={() => setIsLiked(true)}>
                            <FavoriteBorder />
                        </IconButton>
                    )}
                    {/* <Button size='small'>Like</Button> */}
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
                <CommentList comments={spot.comments} username={spot.username} postId={spot.id} />
            </Card>
        </Box>
    )

}

export default SpotItem; 