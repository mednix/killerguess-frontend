'use strict';
angular.module('guess')
  .controller('QuestionController', function ($scope, $location, $routeParams, questionRepository, guessRepository, guessFactory) {
    $scope.question=questionRepository.getById($routeParams.questionId);
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
