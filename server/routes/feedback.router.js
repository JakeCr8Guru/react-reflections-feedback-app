const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET for DB
router.get("/", (req, res) => {
  console.log("GET /api/feedback");
  pool
    .query('SELECT * from "feedback";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /api/feedback", error);
      res.sendStatus(500);
    });
});

// POST to DB
router.post('/', (req, res) => {
  const reflection = req.body;
  console.log(reflection);
  // Validation:
	// if (reflection.feeling === '') {
	// 	res.sendStatus(400);
	// 	return;
  // }
  const queryText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
	pool.query(queryText, [
			reflection.feeling,
			reflection.understanding,
      reflection.support,
      reflection.comments,
		])
		.then((result) => {
			console.log('finished posting!', result.rows);
			res.status(201);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
});


module.exports = router;
