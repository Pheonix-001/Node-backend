const router = require('express').Router();

router.get('/', (req, res) => {

	console.log("hello home");
	
	res.send("this is home page")	
})

module.exports = router