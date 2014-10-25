'use strict';

/**
 * @ngdoc overview
 * @name guess
 * @descriptionanswer
 * # guess
 *
 * Take a guess.
 */
angular
  .module('guess', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/guess/question/question.html',
        controller: 'QuestionController'
      })
      .when('/answer', {
        templateUrl: 'views/guess/answer/answer.html',
        controller: 'AnswerController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
