var app = angular.module("bandApp",['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when("/",{
		templateUrl: "views/groups.html",
		controller: "groupManager"
	})
	.when("/artist/:groupName",{
		templateUrl: "views/artist.html",
		controller: "artistManager"
	})
	.when("/decade/:decadeFilter",{
		templateUrl: "views/groupFilter.html",
		controller: "decadeManager"
	})
	.otherwise({
		redirectTo: "/"
	})
}]);

app.controller("groupManager", ['$scope','$http', function($scope, $http){
	$http.get("js/Bands_Json.js").success (function (data){
		$scope.groups = data;
	});
}]);

app.controller("artistManager", ['$scope','$http', "$routeParams", function($scope, $http, $routeParams){
	$scope.nameFilter = $routeParams.groupName;

	$http.get("js/Bands_Json.js").success (function (data){
		$scope.groups = data;
	});
}]);

app.controller("decadeManager", ['$scope','$http', "$routeParams", function($scope, $http, $routeParams){
	$scope.decadeFilter = $routeParams.decadeFilter;

	$http.get("js/Bands_Json.js").success (function (data){
		$scope.groups = data;
	});
}]);

app.directive("appHeader", function(){
	return {
		restrict: "E",
		templateUrl: "views/headerView.html"
	}
});

app.directive("appFooter", function(){
	return {
		restrict: "E",
		templateUrl: "views/footerView.html"
	}
});

app.directive("artElement", function(){
	return{
		restrict: "E",
		templateUrl: "views/group.html"
	}
});

app.directive("artBackground", function(){
	return{
		restrict: "E",
		templateUrl: "views/artistBackground.html"
	}
})