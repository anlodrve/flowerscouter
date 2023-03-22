const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//import authentication middleware
const {rejectUnauthenticated,} = require(`../modules/authentication-middleware`);

router.get('/', (req, res) => {
    const queryText = 
        `SELECT * FROM "categories" ORDER BY "name" ASC`;

    pool.query(queryText)
        .then((result) => {
            console.log(result.rows)
            res.send(result.rows);
        })
         .catch(err => {
            console.log('ERROR: Server could not get categories', err);
            res.sendStatus(500)
        })
});

module.exports = router;