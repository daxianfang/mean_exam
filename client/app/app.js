var app = angular.module('app', ['ngRoute','ngCookies', 'ui.bootstrap']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/login.html',
			controller: 'userController',
			controllerAs: 'userCtrl'
		})
		.when('/register', {
			templateUrl: 'partials/register.html',
			controller: 'userController',
			controllerAs: 'userCtrl'
		})
		.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'userController',
			controllerAs: 'userCtrl'
		})
		.when('/dashboard', {
			templateUrl: 'partials/polls.html',
			controller: 'pollController',
			controllerAs: 'pc'
		})
		.when('/create', {
			templateUrl: 'partials/create.html',
			controller: 'pollController',
			controllerAs: 'pc'
		})
		.when('/poll/:id', {
			templateUrl: 'partials/vote.html',
			controller: 'pollController',
			controllerAs: 'pc'
		})
		.otherwise({
			redirectTo: '/'
		})
})