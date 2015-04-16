// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = angular.module('starter',
		[ 'ionic', 'entityConverterControllers' ])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory
		// bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
		// admobAds();
	});
})

function admobAds() {
	var adId = "ca-app-pub-9991691920464381/6235965958";

	function createAd() {
		if (window.plugins && window.plugins.AdMob) {
			var am = window.plugins.AdMob;
			am.createBannerView({
				'publisherId' : adId,
				'adSize' : am.AD_SIZE.BANNER,
				'bannerAtTop' : false
			}, function() {
				am.requestAd({
					'isTesting' : false
				}, function() {
					am.showAd(true);
				}, function() {
					alert('failed to request ad');
				})
			}, function() {
				alert("failed to create ad view");
			});

		} else {
			alert('AdMob plugin not available/ready.');
		}
	}

	createAd();
}