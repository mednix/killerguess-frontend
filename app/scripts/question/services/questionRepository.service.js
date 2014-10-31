'use strict';
angular.module('question').service('questionRepository', function(webStorage){
  var i=0;
  var prefix='question_';
  var questions= {
    'question_5': {
      id: 5,
      image: {
        src: 'http://lorempixel.com/500/600/cats'
      },
      phrase: 'Ch7al f 3mr had lmchicha?',
      answer:{
        value:10
      }

    }
  };
  this.getById=function(id){
    return questions[prefix+id];
  };
  this.save=function(guess){
    ++i;
    guess.id=i;
    webStorage.add(prefix+guess.id, guess);
  };
});
