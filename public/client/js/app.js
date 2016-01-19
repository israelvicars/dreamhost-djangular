angular.module('circleApp', ['Controllers'])
.directive('companies', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/companies.html'
	}
})
.directive('filters', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/filters.html'
	}
})
