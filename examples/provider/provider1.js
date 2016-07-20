angular.module('jm.i18next').config(function ($i18nextProvider) {

	'use strict';

	/*jshint unused:false */
	// window.i18n.addPostProcessor('patrick', function (value, key, options) {
	// 	//https://www.youtube.com/watch?v=YSzOXtXm8p0
	// 	return 'No, this is Patrick!';
	// });
	/*jshint unused:true */

	$i18nextProvider.options = {
		lng: 'de', // If not given, i18n will detect the browser language.
		fallbackLng: 'dev', // Default is dev
		useCookie: false,
		useLocalStorage: false,
		backend: {
			loadPath: "../locales/{{lng}}/{{ns}}.json"
		}
	};

});

angular.module('MyApp', ['jm.i18next']).controller('MyProviderCtrl', function ($rootScope, $scope, $i18next) {

	'use strict';

	$scope.hello = '';

	$rootScope.$on('i18nextLanguageChange', function () {

		$scope.$apply(function () {
			$scope.hello = $i18next('hello');
			$scope.sprintf = $i18next('both.sprintf', {postProcess: 'sprintf', sprintf: ['a','b','c','d']});
		});

		console.log($scope.hello);

	});

	$scope.togglePatrick = function () {
		$i18next.options.postProcess = $i18next.options.postProcess === 'patrick' ? '' : 'patrick';
	};

});
