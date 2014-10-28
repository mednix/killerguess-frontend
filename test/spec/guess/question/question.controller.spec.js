'use strict';

describe('Controller: QuestionController', function () {

    // load the controller's module
    beforeEach(module('guess'));

    var QuestionCtrl,
        $scope,
        guessMakerService,
        $location;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        guessMakerService={
          makeGuess: function () {
          }
        };
        $location={
          path: function () {
          }
        };
        QuestionCtrl= $controller('QuestionController', {
            $scope: $scope,
            $location:$location,
            guessMakerService:guessMakerService
        });
    }));

    it('should submit a guess and redirect to answer page', function () {
        $scope.guess.id=1;
        $scope.guess.value=80;
        spyOn(guessMakerService,'makeGuess');
        spyOn($location,'path');
        $scope.makeGuess();
        expect(guessMakerService.makeGuess).toHaveBeenCalled();
        expect($location.path).toHaveBeenCalledWith('/answer/'+$scope.guess.id);
    });
});
