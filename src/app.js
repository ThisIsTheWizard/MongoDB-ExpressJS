const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Database CRUD Operations
const users = require('./routes/users');
const accounts = require('./routes/statements');

app.use(bodyParser.json());
app.use(cors());
app.use(users);
app.use(accounts);

mongoose.connect(
	'mongodb+srv://the_wizard:Thewizard421@@cluster0-llcuf.gcp.mongodb.net/myDB?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useFindAndModify: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	}
);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server has been running on ${port}`));
