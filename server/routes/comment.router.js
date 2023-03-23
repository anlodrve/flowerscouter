const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//post new comments
router.post('/', (req, res) => {
    const queryText =  
      `
        INSERT INTO "comments" ("authorId", "commentText", "postId")
        VALUES ( $1, $2, $3)
      `
    console.log(req.body.payload);
    //first query
    pool.query(queryText, [req.body.payload.authorId, req.body.payload.commentText, req.body.payload.postId])
    .then(result => {
      res.sendStatus(201);
    }).catch(err => {
      res.sendStatus(500); 
      console.log('post failed in server', err)
    })
});

module.exports = router;