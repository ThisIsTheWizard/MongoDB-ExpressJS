const express = require('express');
const statements = require('../models/statements');
const router = express.Router();

router.get('/statements/get', async (req, res) => {
	await statements.find().then((statements) => res.send(statements)).catch((err) => res.status(201).send(err));
});
router.get('/statements/get/:id', async (req, res) => {
	let query = { reg_no: req.params.id };
	await statements.find(query).then((statements) => res.send(statements)).catch((err) => res.status(201).send(err));
});
router.post('/statements/post/:id', async (req, res) => {
	let newStatement = {
		reg_no: req.params.id,
		particulars: req.body.particulars,
		deposited: req.body.deposited,
		withdrawn: req.body.withdrawn,
		total: req.body.total
	};
	await statements
		.create(newStatement)
		.then((statements) => res.send(statements))
		.catch((err) => res.status(404).send(err));
});
router.put('/statements/update/:id', async (req, res) => {
	await statements
		.findByIdAndUpdate(req.params.id, req.body)
		.then((statement) => res.send(statement))
		.catch((err) => res.status(201).send(err));
});
router.delete('/statements/delete/:id', async (req, res) => {
	await statements
		.findByIdAndDelete(req.params.id)
		.then((statement) => res.send(statement))
		.catch((err) => res.status(201).send(err));
});

module.exports = router;
