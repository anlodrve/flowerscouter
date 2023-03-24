import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useSelector } from "react-redux";
import AddComment from "./AddComment";

function CommentList({ comments, postId }) {
    console.log('comments array??', comments)
    const commentAuthor = useSelector((store) => store.user)
    return (

        <Box>
            <Accordion >
                <AccordionSummary
                    id='panel1-header'
                    aria-controls='panel1-content'
                    expandIcon={<ExpandMoreIcon />} 
                    >
                    <Typography>Comments</Typography>
                </AccordionSummary>
                {comments.map(comment => {
                    return (
                        <>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        border: '1px solid',
                                        padding: '8px'
                                    }}>
                                    <Typography variant='subtitle1'>
                                        {commentAuthor?.username} wrote:
                                    </Typography>
                                    <Typography variant='body1'>
                                        {comment.commentText}
                                    </Typography>
                                </Box>
                            </AccordionDetails >
                        </>
                    )
                })}
                <AddComment postId={postId} />
            </Accordion>
        </Box>
    )
}

export default CommentList; 