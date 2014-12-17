angular.module("workshop.list")

    .controller("ListCtrl", function (Employees) {

        var list = this;
        list.persons = Employees.persons;

    });
