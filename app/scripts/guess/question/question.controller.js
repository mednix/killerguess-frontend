angular.module('guess')
  .controller('QuestionController', function ($scope, $location) {
    $scope.question = {
      image: {
        src: 'http://lorempixel.com/500/600/cats'
      },
      phrase: 'Ch7al y9dr ykoun f 3mr had lmoch ?',
      guess: null
    };
    $scope.guess=function(){

      $location.path("/answer");
    };
  });
