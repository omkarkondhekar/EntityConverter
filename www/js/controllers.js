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

	$scope.convertEntity = function() {
		convertEntity($scope);
	}
});

/* Business Logic starts here */
var entity;
function getUnitsforScope($scope) {
	console.log("Inside getUnits for scope");
	if ($scope.entity.nmPlaca == "Distance/Length") {
		entity = new DistanceFactory();
		console.log("Created Distance Factory");
		$scope.unitsList = entity.units;
	}
}

function convertEntity($scope) {
	console.log($scope.destUnit);
	var convertdValue = entity.convert($scope.txtValue, $scope.srcUnit,
			$scope.destUnit);
	$scope.convertdValue = convertdValue;
}
