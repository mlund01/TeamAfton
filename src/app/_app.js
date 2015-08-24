angular.module( 'teamAfton', [
	'templates-app',
	'ngSanitize',
	'ngAnimate',
	'ngMessages',
	'ngTouch',
	'ui.router',
	'ui.bootstrap'
])

	.config( Routing )
	.controller( 'AppCtrl', AppCtrl )

	.constant('appname', 'Team Afton')


;


function Routing( $urlRouterProvider, $urlMatcherFactoryProvider ) {
	$urlMatcherFactoryProvider.strictMode(false);
	$urlRouterProvider.otherwise( '/home' );
	//$locationProvider.html5Mode(true);
	//TODO: For HTML5 mode to work we need to always return index.html as the entry point on the serverside
}


function AppCtrl( $state ) {
	var vm = this;
	vm.logout = function() {
		$state.go('login');
	}
}