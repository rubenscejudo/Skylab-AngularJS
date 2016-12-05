angular.module('myControllers', ['myServices'])
	.controller('searchController', function($scope, $rootScope, spotifyService) {
		$scope.title = "SpotiFinder 🎶 😎"

		$scope.findArtists = function(e) {
			e.preventDefault();
			spotifyService.getArtists($scope.artistQuery)
				.then( function(response) {
					$rootScope.artists = response.data.artists.items;
				})
		}

	})
	.controller('artistsController', function($scope, $rootScope, spotifyService) {

		$scope.findAlbums = function() {
				spotifyService.getAlbums($scope.idArtist)
					.then( function(response) {
						$rootScope.albums = response.data.items;
					} )
			}

	})
	.controller('albumsController', function($scope, $rootScope, spotifyService) {

		$scope.findTracks = function() {
			console.log ("looking for tracks...")
				var idAlbum = $scope.dataAlbum.split("|")[0];
				$rootScope.coverAlbum = $scope.dataAlbum.split("|")[1];
				spotifyService.getTracks(idAlbum)
					.then( function(response) {
						$rootScope.tracks = response.data.items;
					} )
			}
	})
