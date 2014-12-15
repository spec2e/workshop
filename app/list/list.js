angular.module("workshop.list", [])

    .config(function ($stateProvider) {

        $stateProvider
            .state("list", {
                url: "/list",
                controller: "ListCtrl as list",
                templateUrl: "list/list.html"
            })

    })

    .controller("ListCtrl", function (Employees) {

        var list = this;
        list.persons = Employees.persons;

    });

