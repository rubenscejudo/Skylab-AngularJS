angular.module('myApp')
	.factory('spotifyService', function($http) { 

	//$http service makes a request to the server, and returns a response.
	//The .get method is a shortcut method of the $http service. There are several shortcut methods
	/*The response from the server is an object JSON with these properties:
		.config the object used to generate the request.
		.data a string, or an object, carrying the response from the server.
		.headers a function to use to get header information....*/
	
	/*$http is an XMLHttpRequest object for requesting external data.
	$http.get() reads JSON data from http://www.w3schools.com/angular/customers.php.*/


			function getArtists( artistName ) {
				return $http.get("https://api.spotify.com/v1/search?type=artist&query=" + artistName);
			}

			//El parametro artistQuery se le pasa a findArtists() que está en controllers. Es parametro
			//se lo pasa a getArtists en Services. Este devuelve un objeto (json), al controller,
			//.then ,después se ejecuta una funcion cuyo parametro, response, es el objeto que
			//devuelve el servicio, en este caso utilizamos {getArtist : getArtist}


		/*	$scope.findArtists = function(e) {
			e.preventDefault();
			spotifyService.getArtists($scope.artistQuery)
				.then( function(response) {
					$scope.artists = response.data.artists.items;
				})
			}
				//  igualando la respuesta a artist tenemos acceso a todos los artistas que luego 
				pintamos en index con artists.name  */

				/*<select ng-model="idArtist" ng-change="findAlbums()"  name="" id="input" class="form-control" required="required">
				<option ng-repeat="artist in artists" value="{{ artist.id }}">{{ artist.name }}</*/

				//En index ng-model va a recoger el valor de idArtist del objeto anterior.
				//para ello, con ng-repeat pintamos cada uno de los artist in artists que pintamos con
				//artist.name.  Cuando elegimos uno se lanza ng-change que ejecuta la funcion findAlbums() que 
				//recoge el value de {{artist.id}} y se vuelve a repetir el ciclo



			function getAlbums( artistId ) {
				return $http.get("https://api.spotify.com/v1/artists/" + artistId + "/albums");
			}

			function getTracks( albumId ) {
				return $http.get("https://api.spotify.com/v1/albums/" + albumId + "/tracks");
			}

			return {
				getArtists: getArtists,
				getAlbums: getAlbums,
				getTracks: getTracks
			}
	})      //Service devuelve un objeto con el resultado de ejecutar las funciones.


