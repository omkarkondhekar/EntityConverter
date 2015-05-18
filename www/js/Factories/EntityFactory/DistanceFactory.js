function DistanceFactory() {
	this.units = [ {
		id : 1,
		label : 'Angstrom',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 2,
		label : 'Astronomical Unit'
	}, {
		id : 3,
		label : 'Cable (UK)'
	}, {
		id : 4,
		label : 'Cable (US)'
	}, {
		id : 5,
		label : 'Caliber'
	}, {
		id : 6,
		label : 'Centimeter'
	}, {
		id : 7,
		label : 'Chain'
	}, {
		id : 8,
		label : 'Cubit'
	}, {
		id : 9,
		label : 'Fathom'
	}, {
		id : 10,
		label : 'Foot'
	}, {
		id : 11,
		label : 'Furlong'
	}, {
		id : 12,
		label : 'Hand'
	}, {
		id : 13,
		label : 'Inch'
	}, {
		id : 14,
		label : 'Kilometer'
	}, {
		id : 15,
		label : 'League'
	}, {
		id : 16,
		label : 'Light Year'
	}, {
		id : 17,
		label : 'Link'
	}, {
		id : 18,
		label : 'Meter'
	}, {
		id : 19,
		label : 'Micrometer'
	}, {
		id : 20,
		label : 'Micron'
	}, {
		id : 21,
		label : 'Mile'
	}, {
		id : 22,
		label : 'Millimeter'
	}, {
		id : 23,
		label : 'Nanometer'
	}, {
		id : 24,
		label : 'Nautical Mile'
	}, {
		id : 25,
		label : 'Parsec'
	}, {
		id : 26,
		label : 'Rod'
	}, {
		id : 27,
		label : 'Yard'
	} ];
	this.centralUnit = "Meter";

}

DistanceFactory.prototype.convert = function(srcUnit, destUnit) {
var tempValue=convert();
}

/*
 * var distanceFactory = angular.module('DistanceFactory', ['EntityFactory']);
 * var tempValueInCentalUnits; var centralUnit="Meter";
 * 
 * var
 * 
 * distanceFactory.factory('DistanceFactory', function(EntityFactory) { return {
 * getUnits : units } });
 */