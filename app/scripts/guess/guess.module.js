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
      .when('/question/:questionId', {
        templateUrl: 'views/guess/question.html',
        controller: 'QuestionController',
        resolve:function(){

        }
      })
      .when('/answer/:guessId', {
        templateUrl: 'views/guess/answer.html',
        controller: 'AnswerController'
      });
  });
