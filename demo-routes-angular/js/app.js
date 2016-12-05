angular.module("myApp", ['ngRoute'])
	.config( function($routeProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/home.html',
					controller: 'homeController'
				})
				.when('/about', {
					templateUrl: 'views/about.html',
					controller: 'aboutController'
				})
				.when('/contact', {
					templateUrl: 'views/contact.html',
					controller: 'contactController'
				})
				.otherwise({redirectTo: '/'});

	})
