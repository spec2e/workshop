angular.module("workshop.details", [])

    .config(function ($stateProvider) {

        $stateProvider
            .state("details", {
                url: "/details/:id",
                controller: "DetailsCtrl as details",
                templateUrl: "details/details.html"
            })

    })

    .controller("DetailsCtrl", function ($stateParams, Employees) {

        var details = this;

        init();

        function init() {
            details.person = getDetails($stateParams.id);
        }

        function getDetails(id) {
            var ret = null;
            angular.forEach(Employees.persons, function(person) {
                if(person.id === id) {
                    ret = person;
                }
            });
            return ret;
        }
    });

