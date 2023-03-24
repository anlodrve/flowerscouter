
import React from 'react';
import {  useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@mui/material';


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
        setNewComment({...newComment, [key]: event.target.value})
        console.log(newComment);
    }

    //post the comment to the database
   const handleSubmit = (event) => {
    event.preventDefault();

    dispatch ({
        type: 'POST_COMMENT',
        payload: newComment
    })
   }
   

    return(
        <Box className="commentBox">
            {/* comment inputs */}
            <form onSubmit={handleSubmit}>
                <textarea 
                    className="commentTextArea" 
                    rows="4" 
                    cols="50" 
                    label="Comment"
                    value={newComment.commentText}
                    onChange={(event) => handleChange(event, 'commentText')}
                    >
                    
                    </textarea>
                    <button type="submit">Submit Comment</button>
            </form>
        </Box>
    )

}

export default AddComment; 