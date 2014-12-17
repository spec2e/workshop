angular.module("workshop.details", [])

    .config(function ($stateProvider) {

        $stateProvider
            .state("details", {
                url: "/details/:id",
                controller: "DetailsCtrl as details",
                templateUrl: "details/details.html"
            })

    });



