'use strict';
angular.module('guess')
  .controller('AnswerController', function ($scope) {
    $scope.question = {
      image: {
        src: 'http://lorempixel.com/500/600/cats'
      },
      phrase: 'Ch7al y9dr ykoun f 3mr had lmchicha?'
    };
    $scope.guess= 45;
    $scope.answer = {
        phrase:'had lmchicha f 3mrha 10 a3wam',
        type: 'integer',
        value: 30
    };
    $scope.isRight=function(){
      return $scope.answer.value===$scope.guess;
    };
    $scope.isWrong=function(){
      return !$scope.isRight();
    };
  });
