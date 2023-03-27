
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//import comments
import CommentList from '../Comments/CommentList';

//mui imports
import { Box, Card, CardContent, Typography, CardActions, IconButton, CardMedia } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'


function SpotItem({ spot }) {

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
                    height='130'
                    image={spot.category === 1 ? `${`https://cdn.shopify.com/s/files/1/1022/5071/products/e93465b598dc4af8a8f39ebf4ff8d64d_f0c4e162-ab1f-4427-8ff6-3a42971efbf2_1800x1800.jpg?v=1676341047`}` :
                           spot.category == 2 ? `${`https://www.gardenia.net/storage/app/public/plant_family/detail/qlnp00IOiv1MpAUEUdDU1VUA10tJCgb0xp7K8Iuk.webp`}` :
                           spot.category == 3 ? `${`https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}` :
                           spot.category == 4 ? `${`https://pics.freeartbackgrounds.com/midle/Background_with_Red_Rose_Bush-267.jpg`}` :
                           spot.category == 5 ? `${`https://www.housedigest.com/img/gallery/how-to-grow-and-take-care-of-a-bearded-iris/how-to-care-for-bearded-iris-1647879768.webp`}` :
                           spot.category === 6 ? `${`https://bdc2020.o0bc.com/wp-content/uploads/2019/08/sunbelievable-brown-eyed-girl-sunflower-1-6308e983123a4-768x432.jpg?width=900`}` :
                        ''}
                    alt='flower image'
                    sx={{
                       
                    }}
                />
                <CardActions sx={{
                    alignSelf: "stretch",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                }} >
                    {isLiked === true ? (
                        <IconButton color="primary" aria-label="like button" onClick={() => setIsLiked(false)}>
                            <Favorite />
                        </IconButton>
                    ) : (
                        <IconButton color="primary" aria-label="not yet liked button" onClick={() => setIsLiked(true)}>
                            <FavoriteBorder />
                        </IconButton>
                    )}
                </CardActions>
                <CardContent
                    sx={{
                        mt: '-60px'
                    }}
                >
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