angular.module('Controllers', []).controller('companiesCtrl', function($scope, $http) {

	$http.get('http://circleup.dreamhosters.com/api/companies/?format=json').then(function(response) {
		$scope.companies = response.data.objects
	})

	$scope.hover = false
	$scope.showFilters = false
	$scope.categoryFilter = ''
	$scope.locationFilter = ''
	$scope.searchFilter = ''
	$scope.categoryOptions = [
		'Apparel',
		'Fashion accessories',
		'Household cleaners & food',
		'Household products',
		'Sporting goods'
	]
	$scope.locationOptions = {
		'FL': 'Florida',
		'ME': 'Maine',
		'NY': 'New York',
		'NV': 'Nevada',
		'OR': 'Oregon',
		'TX': 'Texas'
	}

	$scope.backgroundChange = function(image, hover){
		var bg
		if(hover) {
			bg = "linear-gradient(#008EBC, rgba(0, 0, 0, 0.0) 200px), url('images/" + image + "')"
		} else {
			bg = "url('images/" + image + "')"
		}
		return { 'background-image': bg }
	}

	$scope.allFilters = function(company){
		if ($scope.categoryFilter && company.category !== $scope.categoryFilter) { return false}
		else if ($scope.locationFilter && company.state !== $scope.locationFilter) { return false }
		else if ($scope.searchFilter){
			var companyText = company.category + company.city + company.flagship + company.founder + company.name + company.retailers + company.tagline + company.state + $scope.locationOptions[company.state]
			companyText = companyText.toUpperCase()
			if(companyText.search($scope.searchFilter.toUpperCase()) < 0) {
				return false
			}
		}
		return true
	}

	$scope.resetFilters = function(){
		$scope.categoryFilter = ''
		$scope.locationFilter = ''
		$scope.searchFilter = ''
	}
})
