function CommentList( {comments, username} ) {
    console.log('comments array??', comments)

    return(
        <>
        <h6>comments</h6>
        {comments.map(comment => {
            return(
            <div>
                <h6>{username}</h6>
                <p>{comment.commentText}</p>
            </div>
            )
        })}
        </>
    )
}

export default CommentList; 