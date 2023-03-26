
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//import comments
import CommentList from '../Comments/CommentList';

//mui imports
import { Box, Card, CardContent, Typography, CardActions, IconButton, CardMedia } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'


function SpotItem({spot}) {

    const [isLiked, setIsLiked] = useState(false)
    const categories = useSelector((store) => store.categories)

    // const categoriesKey = () => {
    //     categories.map((category) => {
    //         return(
    //         category.id == 1 ? `https://cdn.shopify.com/s/files/1/1022/5071/products/e93465b598dc4af8a8f39ebf4ff8d64d_f0c4e162-ab1f-4427-8ff6-3a42971efbf2_1800x1800.jpg?v=1676341047` :
    //         category.id == 2 ? `peony` :
    //         category.id == 3 ? `tulip` :
    //         category.id == 4 ? `rose` :
    //         category.id == 5 ? `iris` :
    //         category.id == 6 ? `https://www.provenwinners.com/sites/provenwinners.com/files/imagecache/500x500/ifa_upload/helianthus_suncredible_suncredible_yellow.jpg` :
    //     ''
    // )})
    // }

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
                    image={`${`https://cdn.shopify.com/s/files/1/1022/5071/products/e93465b598dc4af8a8f39ebf4ff8d64d_f0c4e162-ab1f-4427-8ff6-3a42971efbf2_1800x1800.jpg?v=1676341047`}`}
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