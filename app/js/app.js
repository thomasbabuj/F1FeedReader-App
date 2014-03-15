'use strict';


angular.module('F1FeederApp', [
  'F1FeederApp.controllers',
  'F1FeederApp.services' ,
  'ngRoute' 
]).
  
  config (['$routeProvider', function($routeProvider) {
  	$routeProvider
  		.when ("/drivers", {templateUrl : "partials/drivers.html", controllers : "driversController"})
  		.when ("/drivers/:id", {templateUrl : "partials/driver.html", controllers : "driverController"})
  		.otherwise ( {redirectTo : '/drivers'});
  }]);