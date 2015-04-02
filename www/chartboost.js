
	var Chartboost = exports;

	var exec = require('cordova/exec');
	var cordova = require('cordova');

	Chartboost.init = function(appId, appSignature) {
		exec(null, null, "ChartboostPlugin", "init", [
				appId, appSignature ]);
	}

	Chartboost.showInterstitial = function(sucessCallback, failCallback, location) {
		exec(sucessCallback, failCallback, "ChartboostPlugin", "showInterstitial", [location]);
	}

    Chartboost.cacheInterstitial = function(sucessCallback, failCallback, location) {
        exec(sucessCallback, failCallback, "ChartboostPlugin", "cacheInterstitial", [location]);
    }

    Chartboost.showMoreGames = function(sucessCallback, failCallback, location) {
        exec(sucessCallback, failCallback, "ChartboostPlugin", "showMoreGames", [location]);
    }

    Chartboost.cacheMoreGames = function(sucessCallback, failCallback, location) {
        exec(sucessCallback, failCallback, "ChartboostPlugin", "cacheMoreGames", [location]);
    }
