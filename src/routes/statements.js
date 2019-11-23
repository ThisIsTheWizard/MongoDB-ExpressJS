const express = require('express');
const statements = require('../models/statements');
const router = express.Router();

router.get('/statements/get/:id', async (req, res) => {
	await statements
		.find(req.params.id)
		.then((statements) => res.send(statements))
		.catch((err) => res.status(201).send(err));
});
router.post('/statements/post', async (req, res) => {
	await statements
		.create(req.body)
		.then((statement) => res.send(statement))
		.catch((err) => res.status(404).send(err));
});
router.put('/statements/update/:id', async (req, res) => {
	await statements
		.findByIdAndUpdate(req.params.id, req.body)
		.then((statements) => res.send(statements))
		.catch((err) => res.status(201).send(err));
});
router.delete('/statements/delete/:id', async (req, res) => {
	await statements
		.findByIdAndDelete(req.params.id)
		.then((statements) => res.send(statements))
		.catch((err) => res.status(201).send(err));
});

module.exports = router;
