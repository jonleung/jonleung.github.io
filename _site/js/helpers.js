var StringHelpers = StringHelpers || {};

StringHelpers.contains = function(string, substring) {
	return string.indexOf(substring) != -1;
};