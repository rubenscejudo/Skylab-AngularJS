angular.module('myCalculator')
	.controller('myFirstOpration', function($scope, $rootScope){
		$scope.title = "Percentage Calculator PROJECT"
		
		$scope.firstOperation = function() {
			var op1 = Number($scope.op1);
			var op2 = Number($scope.op2);
			$scope.result = op1 / 100 * op2
		}
	})

/*	.controller('mySecondOperation', function($scope, $rootScope){
		$scope.secondOperation = function() {
			var op1 = Number($scope.op1);
			var op2 = Number($scope.op2);
			$scope.result = op1 / op2 * 100
		}
	})*/

