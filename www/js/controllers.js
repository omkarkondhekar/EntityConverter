var cntl = angular.module('entityConverterControllers', [ 'ionicSelect',
		'EntityFactory' ]);

cntl.controller('main', function($scope, EntityFactory) {

	var data = EntityFactory.entities;
	$scope.veiculos = data;

	$scope.testa = function() {
		alert($scope.veiculo.nmPlaca);
	}

	$scope.getUnits = function() {
		getUnitsforScope($scope);
	}
});

/* Business Logic starts here */
function getUnitsforScope($scope) {
	if ($scope.entity.label == "Distance") {
		$scope.unitsList = [ {
			label : 'Kilometers'
		}, {
			label : 'Miles'
		}, {
			label : 'Nautical Miles'
		} ]
	}
}