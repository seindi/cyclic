var express = require ("express")
var app = express ()
app.get ("/", function (request, response) {
	response.send ("hello world")
	})
app.listen ((process.env.PORT || 3000), "0.0.0.0", function () {
	console.log ("server running ...")
	})
