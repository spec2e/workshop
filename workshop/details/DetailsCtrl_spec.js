describe("DetailsCtrl controller", function () {

    var that = this;
    that.DetailsCtrl = null;
    that.scope = null;

    beforeEach(module("workshop"));

    beforeEach(inject(function ($controller, $rootScope) {

        that.scope = $rootScope.$new();
        that.DetailsCtrl = $controller('DetailsCtrl as details', {$scope: that.scope});

    }));

    it("should test that the controller is created", function () {
        expect(that.DetailsCtrl).not.toBe(null);
    })

});