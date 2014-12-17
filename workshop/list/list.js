angular.module("workshop.list", [])

    .config(function ($stateProvider) {

        $stateProvider
            .state("list", {
                url: "/list",
                controller: "ListCtrl as list",
                templateUrl: "list/list.html"
            })

    });



