'use strict';
angular.module('guess').factory('routeFilters', function ($location,  authService, guessRepository, questionRepository, cheatDetector) {

  return {
    hasNotAlreadyGuessed:function (event, nextRoute) {
      var questionId;
      questionId=nextRoute.params.questionId;
      questionId=questionId  || guessRepository.getById(nextRoute.params.guessId).question.id;
      if(cheatDetector.hasAlreadyGuessed(authService.user(),questionRepository.getById(questionId))){
        $location.path('/');
      }
    },
    isAuthenticated:function(){
      if(!authService.isLoggedIn()){
        authService.loginAsGuest();
      }
    }
  };
});
