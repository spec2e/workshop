angular.module("workshop.details")

    .controller("DetailsCtrl", function ($stateParams, Employees) {

        var details = this;

        init();

        function init() {
            details.person = Employees.getDetails($stateParams.id);
        }

    });