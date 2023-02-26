const express = require('express')
const app = express();

app.use('/api/home', require('./routes/home'));


const port = 4000
app.listen(port, () => {
	console.log("App is listening on port", port);
})