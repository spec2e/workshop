describe("ListCtrl controller", function () {

    this.ListCtrl = null;
    this.scope = null;

    beforeEach(module("workshop"));

    beforeEach(inject(function ($controller, $rootScope) {

        this.scope = $rootScope.$new();
        this.ListCtrl = $controller('ListCtrl as list', {$scope: this.scope});

    }));

    it("should test that the controller is created", function () {
        expect(this.ListCtrl).not.toBe(null);
    })

});