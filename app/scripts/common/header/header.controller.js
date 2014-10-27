'use strict';

angular.module('common').controller('HeaderController', function($scope, $location){
    $scope.isCurrentLocation=function (viewPath){
        return $location.path()===viewPath;
    };
});
