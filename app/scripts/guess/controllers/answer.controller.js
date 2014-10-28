'use strict';
angular.module('guess')
  .controller('AnswerController', function ($scope,$routeParams, guessRepositoryService, guessCheckerService) {
    $scope.question = {
      image: {
        src: 'http://lorempixel.com/500/600/cats'
      },
      phrase: 'Ch7al y9dr ykoun f 3mr had lmchicha?'
    };
    $scope.answer = {
        phrase:'had lmchicha f 3mrha 10 a3wam',
        type: 'integer',
        value: 10
    };
    $scope.isRight=function(){
      var guess;
      guess=guessRepositoryService.getById($routeParams.guessId);
      return guessCheckerService.check(guess, $scope.answer);
    };
    $scope.isWrong=function(){
      return !$scope.isRight();
    };
  });

