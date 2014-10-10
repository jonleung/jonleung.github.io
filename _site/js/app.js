var App = {};

App.init = function() {
	console.log("Hello World from App.init in app.js");
	$(document).foundation();
};

$(document).ready(function() {
	App.init();
});

