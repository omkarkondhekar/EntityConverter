function DistanceFactory() {
	this.units = [ {
		id : 1,
		label : 'Angstorm',
		unitToCentral : 0.0000000001,
		centralToUnit : 10000000000
	}, {
		id : 2,
		label : 'Astronomical Unit',
		unitToCentral : 149597870700,
		centralToUnit : 6.68458712e-12
	}, {
		id : 3,
		label : 'Cable (UK)',
		unitToCentral : 185.3184,
		centralToUnit : 0.0054
	}, {
		id : 4,
		label : 'Cable (US)',
		unitToCentral : 219.456,
		centralToUnit : 0.0046
	}, {
		id : 5,
		label : 'Caliber',
		unitToCentral : 0.0003,
		centralToUnit : 3937.0079
	}, {
		id : 6,
		label : 'Centimeter',
		unitToCentral : 100,
		centralToUnit : 0.01
	}, {
		id : 7,
		label : 'Chain',
		unitToCentral : 20.1168,
		centralToUnit : 0.0497
	}, {
		id : 8,
		label : 'Cubit',
		unitToCentral : 0.4572,
		centralToUnit : 2.1872
	}, {
		id : 9,
		label : 'Fathom',
		unitToCentral : 1.8288,
		centralToUnit : 0.5468
	}, {
		id : 10,
		label : 'Foot',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 11,
		label : 'Furlong',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 12,
		label : 'Hand',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 13,
		label : 'Inch',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 14,
		label : 'Kilometer',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 15,
		label : 'League',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 16,
		label : 'Light Year',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 17,
		label : 'Link',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 18,
		label : 'Meter',
		unitToCentral : 1.0,
		centralToUnit : 1.0
	}, {
		id : 19,
		label : 'Micrometer',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 20,
		label : 'Micron',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 21,
		label : 'Mile',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 22,
		label : 'Millimeter',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 23,
		label : 'Nanometer',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 24,
		label : 'Nautical Mile',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 25,
		label : 'Parsec',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 26,
		label : 'Rod',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	}, {
		id : 27,
		label : 'Yard',
		unitToCentral : 1.0e-10,
		centralToUnit : 1.0e10
	} ];
	this.centralUnit = "Meter";

}

DistanceFactory.prototype.convert = function(value, srcUnit, destUnit) {
	console.log("Value=" + value + " " + "Source=" + srcUnit + " " + "Dest="
			+ destUnit);
	return (value * srcUnit.unitToCentral) * destUnit.centralToUnit;
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