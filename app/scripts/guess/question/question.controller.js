'use strict';
angular.module('guess')
  .controller('QuestionController', function ($scope, $location, guessService) {
    $scope.question = {
      image: {
        src: 'http://lorempixel.com/500/600/cats'
      },
      phrase: 'Ch7al y9dr ykoun f 3mr had lmchicha?'

    };
    $scope.guess=null;
    $scope.makeGuess=function(){
      guessMakerService.makeGuess($scope.guess);
      $location.path('/answer');
    };
  });
