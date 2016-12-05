angular.module('myControllers', ['myServices'])
  .controller('popularController', function($scope,$rootScope ,moviesService ) {
    $rootScope.activetab = 'popular';
  	$scope.urlImg = 'https://image.tmdb.org/t/p/w500/'
    moviesService.getPopular($scope.moviesQuery)
        .then( function(response) {
          $scope.movies = response.data.results
        })
    $scope.findMovies = function(e){
    	e.preventDefault();
    	$scope.filterMovies = $scope.moviesQuery;
      
    }
  })