'use strict';
angular.module('guess').service('guessFactory', function () {

  this.make = function (user, question, value) {

    return new Guess(user, question, value);
  };
  function Guess(user, question, value) {
    this.user = user;
    this.question = question;
    this.value = value;
  }


});
