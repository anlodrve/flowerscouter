const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  const queryText = `SELECT * FROM mappedPlants ORDER BY "id" ASC`
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
  // POST route code here
});

module.exports = router;
