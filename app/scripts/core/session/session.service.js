'use strict';
angular.module('core.session').service('sessionService', function (webStorage) {
  this.get= function (key) {
    return webStorage.get(key);
  };
  this.put= function (key, value) {
    webStorage.add(key,value);
  };
  this.has= function (key) {
    return webStorage.has(key);
  };

});
