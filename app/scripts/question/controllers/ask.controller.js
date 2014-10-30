'use strict';
angular.module('question')
  .controller('AskController', function ($scope, $location, questionRepository, questionFactory) {
    $scope.question = {
      id:5,
      image: {
        src: 'http://lorempixel.com/500/600/cats'
      },
      phrase: 'Ch7al y9dr ykoun f 3mr had lmchicha?'

    };

    $scope.ask=function(){
      //var question=questionFactory.make($scope.question);
      //questionRepository.save(question);
      $location.path('/question/'+$scope.question.id);
    };
  });

