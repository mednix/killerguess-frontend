'use strict';
angular.module('guess').service('guessRepository', function(webStorage){
    var i=0;
    var prefix='guess_';
    this.save=function(guess){
      ++i;
      guess.id=i;
      webStorage.add(prefix+guess.id, guess);
    };
  this.getById=function(id){
    return webStorage.get(prefix+id);
  };
});
