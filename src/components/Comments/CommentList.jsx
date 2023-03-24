import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import AddComment from "./AddComment";

function CommentList({ comments, username, postId }) {
    console.log('comments array??', comments)

    return (

        <>
            {comments.map(comment => {
                return (
                    <>
                        <Accordion>
                            <AccordionSummary
                                id='panel1-header'
                                aria-controls='panel1-content'
                                expandIcon={<ExpandMoreIcon />} >
                                <Typography>Comments</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        border: '1px solid',
                                        padding: '10px'
                                    }}>
                                    <Typography variant='subtitle1'>
                                        {username} wrote:
                                    </Typography>
                                    <Typography variant='body1'>
                                        {comment.commentText}
                                    </Typography>
                                </Box>
                            </AccordionDetails >
                        </Accordion>
                        <AddComment postId={postId} />
                    </>
                )
            })}


        </>
    )
}

export default CommentList; 