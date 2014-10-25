angular.module('guess')
  .controller('AnswerController', function ($scope) {
    $scope.answer = {
      phrase:'had lbnt f 3mrha',
      type: 'integer',
      value: 30
    };
    $scope.question={
      image: {
        src: 'http://lorempixel.com/500/600/people'
      },
      guess: 45
    };
    $scope.isCorrect=function(){
      return $scope.answer.value===$scope.question.guess;
    }
  });
