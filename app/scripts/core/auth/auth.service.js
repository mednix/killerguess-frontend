'use strict';
angular.module('core.auth').factory('authService', function (sessionService) {
  function Auth(){
    this.isLoggedIn= function () {
      return sessionService.has('user');
    };
    this.loginAsGuest= function () {
      sessionService.put('user',{
        id:456,
        as:'guest'
      });
    };
    this.user= function () {
      return sessionService.get('user');
    };
  }
  return new Auth();
});
