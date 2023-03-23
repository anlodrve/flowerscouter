const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// //get comments for specific post 
// router.get('/:id', (req, res) => {
//     const queryText = 
//         `SELECT "comments".id, "comments"."authorId", "comments"."commentText", "comments"."postId", "user".username FROM "comments"
//         JOIN "user" ON "user".id = "comments"."authorId"
//         WHERE "postId" = $1;`
//     const queryParams = [req.params.id]
//     console.log(req.params.id)
//     pool.query(queryText, queryParams)
//     .then( result => {
//       res.send(result.rows);
//       console.log(result.rows)
//     })
//     .catch(err => {
//       console.log('Get comments failed in server', err);
//       res.sendStatus(500)
//     })
// });

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