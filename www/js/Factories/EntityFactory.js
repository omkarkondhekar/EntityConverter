var entityFactory = angular.module('EntityFactory', []);
// var distfact=new DistanceFactory();
entityFactory.factory('EntityFactory', function() {
	return {
		entities : [ {
			id : 1,
			nmPlaca : 'Acceleration - Linear'
		}, {
			id : 2,
			nmPlaca : 'Angle'
		}, {
			id : 3,
			nmPlaca : 'Area'
		}, {
			id : 4,
			nmPlaca : 'Data Size'
		}, {
			id : 5,
			nmPlaca : 'Data Transfer Rate'
		}, {
			id : 6,
			nmPlaca : 'Density'
		}, {
			id : 7,
			nmPlaca : 'Distance/Length'
		}, {
			id : 8,
			nmPlaca : 'Electric Current'
		}, {
			id : 9,
			nmPlaca : 'Energy'
		}, {
			id : 10,
			nmPlaca : 'Flow Rate for Mass'
		}, {
			id : 11,
			nmPlaca : 'Flow Rate for Volume'
		}, {
			id : 12,
			nmPlaca : 'Force'
		}, {
			id : 13,
			nmPlaca : 'Frequency'
		}, {
			id : 14,
			nmPlaca : 'Fuel Consumption'
		}, {
			id : 15,
			nmPlaca : 'Light - Illuminance'
		}, {
			id : 16,
			nmPlaca : 'Light - Luminance'
		}, {
			id : 17,
			nmPlaca : 'Mass'
		}, {
			id : 18,
			nmPlaca : 'Magnetic Field Strength'
		}, {
			id : 19,
			nmPlaca : 'Number base'
		}, {
			id : 20,
			nmPlaca : 'Power'
		}, {
			id : 21,
			nmPlaca : 'Pressure'
		}, {
			id : 22,
			nmPlaca : 'Radiation Dose'
		}, {
			id : 23,
			nmPlaca : 'Radioactivity'
		}, {
			id : 24,
			nmPlaca : 'Sound'
		}, {
			id : 25,
			nmPlaca : 'Speed'
		}, {
			id : 26,
			nmPlaca : 'Temperature'
		}, {
			id : 27,
			nmPlaca : 'Time'
		}, {
			id : 28,
			nmPlaca : 'Torque'
		}, {
			id : 29,
			nmPlaca : 'Volume'
		} ]
	}
});