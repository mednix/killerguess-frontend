'use strict';
angular.module('guess')
  .controller('QuestionController', function ($scope, $location, guessMakerService) {
    $scope.question = {
      image: {
        src: 'http://lorempixel.com/500/600/cats'
      },
      phrase: 'Ch7al y9dr ykoun f 3mr had lmchicha?'

    };
    $scope.guess={
      id:null,
      value:null

    };
    $scope.makeGuess=function(){
      guessMakerService.makeGuess($scope.guess, {username:'med'});
      $location.path('/answer/'+$scope.guess.id);
    };
  });
