 angular.module("myApp",['ngRoute', 'myControllers'])
      .config( function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'views/popular.html',
            controller: 'popularController'
          })
          .otherwise({redirectTo: '/'});
      })