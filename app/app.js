'use strict';

angular.module("workshop", ["ngRoute", "ui.router"])

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/list");

        $stateProvider
            .state("list", {
                url: "/list",
                controller: "ListCtrl as list",
                templateUrl: "list.html"
            })
            .state("details", {
                url: "/details/:id",
                controller: "DetailsCtrl as details",
                templateUrl: "details.html"
            })

    })

    .controller("ListCtrl", function () {

        var list = this;

        list.persons = [
            {
                id: "1",
                name: "Søren Pedersen",
                department: "Udvikler"
            },
            {
                id: "2",
                name: "Flemming Behrend",
                department: "Metodemedarbejder"
            }
        ];

    })

    .controller("DetailsCtrl", function ($stateParams) {

        var details = this,
            persons = [
            {
                id: "1",
                name: "Søren Pedersen",
                department: "Udvikler",
                favoriteDinner: "Biksemad med bearnaisesovs",
                coffeeType: "Espresso",
                shoeSize: "45",
                pets: ["Smilla", "Sneppe", "Snefnug"]
            },
            {
                id: "2",
                name: "Flemming Behrend",
                department: "Metodemedarbejder",
                favoriteDinner: "Gravad laks",
                coffeeType: "Just any coffee",
                shoeSize: "43",
                pets: null
            }
        ];

        init();

        function init() {
            details.person = getDetails($stateParams.id);
        }

        function getDetails(id) {
            var ret = null;
            angular.forEach(persons, function(person) {
                if(person.id === id) {
                    ret = person;
                }
            });
            return ret;
        }
    });
