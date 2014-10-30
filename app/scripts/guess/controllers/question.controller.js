'use strict';
angular.module('guess')
  .controller('QuestionController', function ($scope, $location, guessRepository, guessFactory) {
    $scope.question = {
      id:5,
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
      var user='med', guess;

      //if(!authService.isLoggedIn()){
      //  return;
      //}
      //
      //user=authService.user();
      guess=guessFactory.make(user,$scope.question, $scope.guess.value);

      guessRepository.save(guess);
      $location.path('/answer/'+guess.id);
    };
  });
