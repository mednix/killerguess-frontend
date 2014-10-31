'use strict';
angular.module('guess')
  .controller('AnswerController', function ($scope,$routeParams, guessRepository, guessCheckerService) {
    $scope.guess=guessRepository.getById($routeParams.guessId);
    $scope.question = $scope.guess.question;
    $scope.answer = $scope.question.answer;
    $scope.isRight=function(){


      return guessCheckerService.check($scope.guess, $scope.answer);
    };
    $scope.isWrong=function(){
      return !$scope.isRight();
    };
  });

