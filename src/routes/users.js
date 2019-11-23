const express = require('express');
const users = require('../models/users');
const router = express.Router();

router.get('/users/get/:id', async (req, res) => {
	let query = { reg_no: req.params.id };
	await users.findOne(query).then((users) => res.send(users)).catch((err) => res.status(404).send(err));
});
router.post('/users/post', async (req, res) => {
	await users.create(req.body).then((users) => res.send(users)).catch((err) => res.status(404).send(err));
});
router.put('/users/update/:id', async (req, res) => {
	await users
		.findByIdAndUpdate(req.params.id, req.body)
		.then((users) => res.send(users))
		.catch((err) => res.status(201).send(err));
});
router.delete('/users/delete/:id', async (req, res) => {
	await users
		.findByIdAndDelete(req.params.id)
		.then((users) => res.send(users))
		.catch((err) => res.status(201).send(err));
});

module.exports = router;
