'use strict';

describe('Controller: HeaderController', function () {

    // load the controller's module
    beforeEach(module('common'));

    var HeaderCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        HeaderCtrl= $controller('HeaderController', {
            $scope: scope,
            $location:{
                path:function(){
                    return '/foo';
                }
            }
        });
    }));

    it('should determine if current location path match a given string', function () {
        expect(scope.isCurrentLocation('/foo')).toBeTruthy();
    });
});
