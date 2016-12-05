angular.module("myApp")
	.controller("homeController", function($scope, $rootScope) {
		$rootScope.activetab = 'home';
		$scope.intro = 'fives demilune unmilled dauphiness Archiplata Latvian platykurtic antistrophe leoncito competitrix overshelving malobservation relatability unglad undefalcated whuffle halma pentecostalism plicater centervelic subchancel preheated Almohad crossflower'
	})
	.controller("aboutController", function($scope, $rootScope) {
		$scope.title = "About - Who are we?"
		$rootScope.activetab = 'about';
	})
	.controller("contactController", function($scope, $rootScope) {
		$scope.title = "Contact - Send us a mail!!"
		$rootScope.activetab = 'contact';

		$scope.sendMessage = function(e) {
			e.preventDefault();
			alert($scope.email);
			$rootScope.email = $scope.email;
		}

	})