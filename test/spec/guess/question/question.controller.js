'use strict';

describe('Controller: QuestionController', function () {

    // load the controller's module
    beforeEach(module('guess'));

    var QuestionCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        QuestionCtrl= $controller('QuestionController', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});
