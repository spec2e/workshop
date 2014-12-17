angular.module("workshop")

    .service("Employees", function() {
        this.persons = [
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
            }];
    });