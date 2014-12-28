describe("ListCtrl controller", function () {

    var that = this;
    that.ListCtrl = null;
    that.scope = null;

    beforeEach(module("workshop"));

    beforeEach(inject(function ($controller, $rootScope) {

        that.scope = $rootScope.$new();
        that.ListCtrl = $controller('ListCtrl as list', {$scope: that.scope});

    }));

    it("should test that the controller is created", function () {
        expect(that.ListCtrl).not.toBe(null);
    });

    it("should tet t¨", function () {
        expect(true).toBe(true);
    })
});