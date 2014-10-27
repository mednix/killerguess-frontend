'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # App
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'guess'
  ]).config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
;
