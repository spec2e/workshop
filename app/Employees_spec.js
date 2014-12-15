describe("Employees service", function() {

    this.Employees = null;

    beforeEach(module("workshop"));

    beforeEach(inject(function(_Employees_) {
        this.Employees = _Employees_;
    }));

    it("should return two employees", function () {
        expect(this.Employees.persons.length).toBe(2);
    })

});