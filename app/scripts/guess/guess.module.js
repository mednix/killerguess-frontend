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
      .when('/question', {
        templateUrl: 'views/guess/question/question.html',
        controller: 'QuestionController'
      })
      .when('/answer/:guessId', {
        templateUrl: 'views/guess/answer/answer.html',
        controller: 'AnswerController'
      });
  });
