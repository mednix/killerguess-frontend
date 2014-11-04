'use strict';
angular.module('guess')
  .controller('AnswerController', function ($scope,$routeParams, guessRepository, guessCheckerService) {
    $scope.guess=guessRepository.getById($routeParams.guessId);
    $scope.question = $scope.guess.question;
    $scope.answer = $scope.question.answer;
    $scope.isAnswerShown=false;
    $scope.isRight=function(){
        return guessCheckerService.check($scope.guess, $scope.answer);
    };
    $scope.isWrong=function(){
      return !$scope.isRight();
    };
    $scope.showAnswer=function(){
      $scope.isAnswerShown=true;
    };
  });

