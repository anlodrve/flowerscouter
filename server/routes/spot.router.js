const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "mappedPlants" ORDER BY "id" ASC`
  pool.query(queryText)
  .then( result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get all spots', err);
    res.sendStatus(500)
  })
});

router.post('/', (req, res) => {
  const queryText =  
  `
    INSERT INTO "mappedPlants" ("location", "description")
    VALUES ( POINT ($1, $2), $3)
  `
  console.log(req.body.payload);
  //first query
  pool.query(queryText, [req.body.payload.location.lat, req.body.payload.location.lng, req.body.payload.description])
  .then(result => {
    res.sendStatus(201);
  }).catch(err => {
    res.sendStatus(500); 
    console.log('error in server post', err)
  })
});

module.exports = router;
