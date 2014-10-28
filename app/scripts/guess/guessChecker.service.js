'use strict';
angular.module('guess').service('guessCheckerService', function(){

    this.check=function(guess, answer){
      return guess.value===answer.value;
    };

});
