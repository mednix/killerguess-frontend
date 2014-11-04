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
  //this.hasGuessed= function (user, question) {
  //  return this.all().filter(function (guess) {
  //    console.log(guess.user);
  //    return guess.user.id===user.id && guess.question.id===question.id;
  //  }).length !==0;
  //};
  this.all= function () {
    var guesses=[];
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      if(localStorage.key(i).indexOf(prefix)!==-1){
        guesses.push(angular.fromJson(localStorage.getItem(localStorage.key(i))));
      }

    }
    return guesses;
  };
});
