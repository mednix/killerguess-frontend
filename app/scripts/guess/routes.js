'use strict';
angular.module('guess')
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
  })
  .run(function (routerService, routeFilters) {


    routerService.before('/question', routeFilters.hasNotAlreadyGuessed);

    routerService.before('/answer', routeFilters.hasNotAlreadyGuessed);

    routerService.beforeAny(routeFilters.isAuthenticated);

  })
;
