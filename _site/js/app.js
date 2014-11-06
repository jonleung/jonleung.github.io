var App = {};

App.init = function() {
	$(document).foundation();
	initNavBar();
	initScrollingCares();

};

var initNavBar = function() {

	var navToSectionClassMap = {
		"nav-home": "intro",
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

var initScrollingCares = function() {

	$care = $("#care");

	var cares = ["empowering kids!", "creative self-expression!", "creating space for vulnerability!", "celebrating failure!", "catalyzing the next generation of change makers!", "getting stuff done!"];
	$care.html(cares[0]);
	
	var careY = $care.offset().top;
	var offsetCareY = careY - 150; // 50 pixels above the top of care
	var pixlesPerCare = offsetCareY / cares.length;

	$(window).scroll(function(eventObject) {
		var curY = $(document).scrollTop();

		var careNumber = Math.floor(curY /  pixlesPerCare);
		var careText = cares[careNumber];
		$care.html(careText);

	});


}


$(document).ready(function() {
	App.init();
});

