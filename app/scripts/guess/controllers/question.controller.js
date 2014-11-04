'use strict';
angular.module('guess')
  .controller('QuestionController', function ($scope,$rootScope, $location, $routeParams, questionRepository, guessRepository, guessFactory, authService, cheatDetector) {
    $scope.question=questionRepository.getById($routeParams.questionId);
    $scope.guess={
      id:null,
      value:null

    };

    $scope.user=authService.user();
    $rootScope.$on('$routeChangeStart',function(event){
      $scope.checkAuth();
      event.preventDefault();
     // $scope.preventCheating();

    });

    $scope.makeGuess=function(){
      var guess;
      guess=guessFactory.make(authService.user(),$scope.question, $scope.guess.value);
      guessRepository.save(guess);
      $location.path('/answer/'+guess.id);
    };
    $scope.checkAuth=function(){
      if(!authService.isLoggedIn()){
        authService.loginAsGuest();
      }
    };
    $scope.preventCheating=function(){
      if(cheatDetector.hasAlreadyGuessed($scope.user,$scope.question)){
        $location.path('/');
      }
    };
  });
