
angular.module("workshop", ["ngRoute", "ui.router", "workshop.list", "workshop.details"])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise("/list");
    });



