var app=angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when("/user",{
		templateUrl:"table.htm"
	})
	.when("/viewUser/id",{
		templateUrl:"view.htm",
		controller:"viewController"
	})
})