
window.app = angular.module("soa",["ngRoute","ngSanitize"])
	.service("FirebaseSvc",[
		function () {
			var firebaseConfig = {
			  apiKey: "AIzaSyBH8S79PlUwDESk9i6oKBP63rSAdGkQswo",
			  authDomain: "spirit-of-adventure-a91ec.firebaseapp.com",
			  databaseURL: "https://spirit-of-adventure-a91ec.firebaseio.com/",
			  projectId: "spirit-of-adventure-a91ec",
			};
			const instance = firebase.initializeApp(firebaseConfig);
			const firestore = firebase.firestore();

			const fsSvc = {
				_config : firebaseConfig,
				_instance : instance,
				_firestore : firestore,
			}

			return fsSvc;
		}
	])
	.config([
		'$locationProvider',
		'$routeProvider', 
		($locationProvider,$routeProvider) => {

			$routeProvider
				.when('/', {
					template: JST['/pages/home'](),
				})
				.when('/ark', { 
					template: JST['/pages/ark'](), 
				})
				.when('/roughish-mobs', { 
					template: JST['/pages/roughish-mobs'](), 
				})
				.when('/roughish-mobs/:slug', { 
					template: JST['/pages/roughish-mobs/container'](), 
					controllerAs: "$ctrl",
					controller : "RoughishMobsController"
				})
				.when('/holy', { 
					template: JST['/pages/holy'](),
					controllerAs: "$ctrl",
					controller : "PageHolyController"
				})
				.otherwise({
					redirectTo:'/'
				})

			// configure html5 to get links working on jsfiddle
			// $locationProvider.html5Mode(true);
		}
	])