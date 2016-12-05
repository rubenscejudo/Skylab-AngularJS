angular.module('myServices', [])
	.factory('moviesService', function($http) {
          function getPopular() {
            return $http.get("https://api.themoviedb.org/3/movie/popular?api_key=b02aece29a10412ff763d608568e8e96&language=en-US");
          }
          return {
            getPopular: getPopular
          }
      })