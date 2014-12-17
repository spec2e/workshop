describe("DetailsCtrl controller", function () {

    this.DetailsCtrl = null;
    this.scope = null;

    beforeEach(module("workshop"));

    beforeEach(inject(function ($controller, $rootScope) {

        this.scope = $rootScope.$new();
        this.DetailsCtrl = $controller('DetailsCtrl as details', {$scope: this.scope});

    }));

    it("should test that the controller is created", function () {
        expect(this.DetailsCtrl).not.toBe(null);
    })

});