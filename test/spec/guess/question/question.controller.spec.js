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
            $scope: scope,
            $location:{
              path:function(){}
            }
        });
    }));

    it('should make a guess', function () {
        scope.guess=80;
        scope.makeGuess();
        expect(scope.question).toBeDefined();
    });
});
