describe("Employees service", function() {

    var that = this;
    that.Employees = null;

    beforeEach(module("workshop"));

    beforeEach(inject(function(_Employees_) {
        that.Employees = _Employees_;
    }));

    it("should return two employees", function () {
        expect(that.Employees.persons.length).toBe(2);
    })


});