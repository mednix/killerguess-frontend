'use strict';

/**
 * @ngdoc overview
 * @name guess
 * @descriptionanswer
 * # guess
 *
 * ask a new question.
 */
angular
  .module('question', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/ask', {
        templateUrl: 'views/question/ask.html',
        controller: 'AskController'
      });



  });
