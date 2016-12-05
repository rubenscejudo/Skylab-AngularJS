angular.module('myApp')
	.controller('myController', function($scope, spotifyService) {

		$scope.title = "SpotiFinder 🎶 😎"

		$scope.findArtists = function(e) {
			e.preventDefault();
			spotifyService.getArtists($scope.artistQuery)
				.then( function(response) {
					$scope.artists = response.data.artists.items;
				})
		}

		$scope.findAlbums = function() {
			//console.log("looking for artists....")
				spotifyService.getAlbums($scope.idArtist)
					.then( function(response) {
						$scope.albums = response.data.items;
					} )
			}

		$scope.findTracks = function() {
			//console.log("looking for albums....")
				spotifyService.getTracks($scope.idAlbums)
					.then( function(response) {
						$scope.tracks = response.data.items;
						console.log($scope.tracks)
					} )
			}

	})