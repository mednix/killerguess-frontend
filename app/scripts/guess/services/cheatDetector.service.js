'use strict';
angular.module('guess').factory('cheatDetector', function(guessRepository){

    function CheatDetector(){
        this.hasAlreadyGuessed=function(user, question){
            return true;
            //return guessRepository.findByUser().filter(function (guess) {
            //    return guess.user.id===user.id && guess.question.id===question.id;
            //}).length !==0;
        };

    }
    return new CheatDetector();
});
