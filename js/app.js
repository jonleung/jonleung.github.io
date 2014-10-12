var App = {};

App.init = function() {
	$(document).foundation();
	initNavBar();

};

var initNavBar = function() {

	var navToSectionClassMap = {
		"nav-projects": "notebooks",
		"nav-about": "about",
		"nav-contact": "contact"
	}

	for (var property in navToSectionClassMap) {
		if (navToSectionClassMap.hasOwnProperty(property)) {
			var id = property;
			console.log(id)

			$("#"+id).click((function(id) {
				return function (e) {
					e.preventDefault();

					var klass = navToSectionClassMap[id];

					$('html, body').animate({
						scrollTop: $("."+klass).offset().top
					}, 1000);

				}
			})(id));
		}
	}


}


$(document).ready(function() {
	App.init();
});

