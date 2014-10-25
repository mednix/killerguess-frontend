angular.module('guess')
  .controller('QuestionController', function ($scope, $location) {
    $scope.question = {
      image: {
        src: 'http://lorempixel.com/500/600/people'
      },
      phrase: 'Ch7al y9dr ykoun f 3mr had lbnt ?',
      guess: null
    };
    $scope.guess=function(){

      $location.path("/answer");
    };
  });
