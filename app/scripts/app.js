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
        'common',
        'guess'
  ]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
