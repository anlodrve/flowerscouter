const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//import authentication middleware
const {
  rejectUnauthenticated,
} = require(`../modules/authentication-middleware`);

//get all spots
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText =
    ` SELECT "mappedPlants".id, "mappedPlants".location, "mappedPlants".category, 
        "mappedPlants".description, "mappedPlants".author, "categories".name,"user".username, 
        (SELECT json_agg("comment") 
        			FROM (
        				SELECT "comments".id, "comments"."commentText", "comments"."authorId", "comments"."postId", "user".username FROM "comments"
        				JOIN "user" ON "user".id = "comments"."authorId"
        				WHERE "comments"."postId" = "mappedPlants".id
        				)  "comment"
		) AS "comments"
        FROM "mappedPlants" 
        LEFT JOIN "categories" ON "categories".id = "mappedPlants".category
        LEFT JOIN "comments" ON "comments"."postId" = "mappedPlants".id
        Left JOIN "user" ON "user".id = "mappedPlants"."author"
        GROUP BY "mappedPlants".id, "categories".name, "user".username
        ORDER BY "mappedPlants".id DESC;`

  pool.query(queryText)
    .then(result => {
      console.log('result.rows', result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Get all spots failed in server', err);
      res.sendStatus(500)
    })
});

//get spots authored by the logged-in user
router.get('/user/:id', rejectUnauthenticated, (req, res) => {
  const queryText =
    `
      SELECT "mappedPlants".id, "mappedPlants".location, "mappedPlants".category, 
      "mappedPlants".description, "mappedPlants".author, "categories".name 
      FROM "mappedPlants" 
      JOIN "categories" ON "categories".id = "mappedPlants".category
      WHERE "mappedPlants".author = $1
      ORDER BY "mappedPlants".id DESC
      `
  const queryParams = [req.params.id]
  pool.query(queryText, queryParams)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Get by author failed in server', err);
      res.sendStatus(500)
    })
});

//get spot by spot id 
router.get('/:id', rejectUnauthenticated, (req, res) => {
  const queryText =
    `
      SELECT * FROM "mappedPlants" WHERE "id" = $1
    `
  const queryParams = [req.params.id]
  console.log("id is:", req.params.id)
  pool.query(queryText, queryParams)
    .then(result => {
      console.log('get by id:', result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Get individual spot failed in server', err);
      res.sendStatus(500)
    })
});


router.post('/', rejectUnauthenticated, (req, res) => {
  const queryText =
    `
        INSERT INTO "mappedPlants" ("location", "description", "author", "category")
        VALUES ( POINT ($1, $2), $3, $4, $5)
      `
  console.log(req.body.payload);
  //first query
  pool.query(queryText, [req.body.payload.location.lat, req.body.payload.location.lng, req.body.payload.description, req.body.payload.author, req.body.payload.category])
    .then(result => {
      res.sendStatus(201);
    }).catch(err => {
      res.sendStatus(500);
      console.log('post failed in server', err)
    })
});

//delete only something the logged in user has created
router.delete('/:id', rejectUnauthenticated, (req, res) => {

  queryText =
    `DELETE FROM "mappedPlants" WHERE "id" = $1 AND "author" = $2`
  queryParams = [req.params.id, req.user.id];

  pool.query(queryText, queryParams)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log("Delete failed in server", error);
    });
});

//update a spot only for the authenticated user 
router.put('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `UPDATE "mappedPlants" SET "description" = $1, "location" = POINT ($2, $3) WHERE "id" = $4`
  const queryParams = [req.body.description, req.body.location.x, req.body.location.y, req.params.id]

  pool.query(queryText, queryParams)
    .then((result) => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log("Put failed in server", error);
    });
})

module.exports = router;
