'use strict';
angular.module('guess').service('guessMakerService', function(guessRepositoryService){
    this.makeGuess=function(guess, user){
      guess.user=user;
      guessRepositoryService.save(guess);
      //return guessRepository.get()
    };
});
