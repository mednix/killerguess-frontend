'use strict';
angular.module('guess')
  .controller('QuestionController', function ($scope, $location, $routeParams, questionRepository, guessRepository, guessFactory, authService) {
    $scope.question=questionRepository.getById($routeParams.questionId);
    $scope.guess={
      id:null,
      value:null

    };
    if(!authService.isLoggedIn()){
      authService.loginAsGuest();
    }
    $scope.user=authService.user();
    if(guessRepository.hasGuessed($scope.user,$scope.question)){
     // window.alert('already guessed');
      $location.path('/');
    }
    $scope.makeGuess=function(){
      var guess, user, question;


      question=$scope.question;

      guess=guessFactory.make(user,$scope.question, $scope.guess.value);

      guessRepository.save(guess);
      $location.path('/answer/'+guess.id);
    };
  });
