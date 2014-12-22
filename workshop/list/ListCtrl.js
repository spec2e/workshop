angular.module("workshop.list")

    .controller("ListCtrl", function (Employees) {

        var list = this;
        list.persons = Employees.persons;

        list.addEmployee = function() {
            var id = "" + list.persons.length +1;
            var emp = {
                id: id,
                name: "Test Testesen " + id
            };
            Employees.addEmployee(emp);
        }

    });
