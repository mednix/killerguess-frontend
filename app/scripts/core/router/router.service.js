'use strict';
angular.module('core.router').service('routerService', function ($rootScope, $location) {

  this.before= function (path, filter) {
    registerBeforeFilter(path, filter);
  };
  this.beforeAny= function (filter) {
    $rootScope.$on('$routeChangeStart', function (event, nextRoute, previousRoute) {
        filter.apply(this, [event, nextRoute, previousRoute]);
    });
  };
  function registerBeforeFilter(path, filter) {
    $rootScope.$on('$routeChangeStart', function (event, nextRoute, previousRoute) {
      if (checkPath(path)) {
        filter.apply(this, [event, nextRoute, previousRoute]);
      }
    });
  }
  var checkPath= function (path) {
    return $location.path().indexOf(path)===0;
  };

});
