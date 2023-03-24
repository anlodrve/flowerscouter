
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Stack, TextField, Button } from '@mui/material';


function AddComment({ postId }) {
    const dispatch = useDispatch();
    //get the current user
    const user = useSelector((store) => store.user);

    //capture the new comment in local state to hold all the changes before submit
    const [newComment, setNewComment] = useState({
        authorId: user.id,
        commentText: '',
        postId: postId
    })

    const handleChange = (event, key) => {
        //key is a string value from the input
        setNewComment({ ...newComment, [key]: event.target.value })
        console.log(newComment);
    }

    //post the comment to the database
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'POST_COMMENT',
            payload: newComment
        })

        setNewComment({
            authorId: user.id,
            commentText: '',
            postId: postId
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <Box className="commentBox" sx={{
                // px: '10px'
            }} >
                {/* comment inputs */}
                <Stack spacing={1} direction='column'>
                    <TextField
                        multiline
                        label="Add A Comment"
                        rows={3}
                        variant='outlined'
                        value={newComment.commentText}
                        onChange={(event) => handleChange(event, 'commentText')}
                    >
                    </TextField>
                    <Button type="submit" variant='outlined'>Submit Comment</Button>
                </Stack>
            </Box>
        </form>

    )

}

export default AddComment; 