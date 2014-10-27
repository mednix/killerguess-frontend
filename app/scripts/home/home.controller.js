angular.module('app')
  .controller('HomeController', function ($scope, $location) {
    'use strict';
    $scope.question = {
      image: {
        src: 'http://lorempixel.com/500/600/cats'
      },
      phrase: 'Ch7al y9dr ykoun f 3mr had lmchicha?'

    };
    $scope.guess=null;
    $scope.makeGuess=function(){

      $location.path('/answer');
    };
  });
