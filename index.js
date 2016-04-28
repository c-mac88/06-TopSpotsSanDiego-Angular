var myApp = angular.module('myApp', []);


myApp.controller('MyCtrl', ['$scope', '$http', function($scope, $http) {


activate();

function activate() {
	$http({
	method: 'GET',
	url: 'topspots.json'
	}).then(function (topspots) {

$scope.topspots= topspots.data;

		
		})
	}

}]);

