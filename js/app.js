var app = angular.module ("bandApp", []);

app.controller("groupManager", ['$scope','$http', function($scope, http){
	$http.get("js/Bands_Json.js").success (function (data){
        $scope.groups = data;
    });
}])

app.directive("appHeader", function(){
	return {
		restrict: "E",
		templateUrl: "views/headerView.html"
	}
})

app.directive("appFooter", function(){
	return {
		restrict: "E",
		templateUrl: "views/footerView.html"
	}
})