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

        this.getDetails = function(id) {
            var ret = null;
            angular.forEach(this.persons, function(person) {
                if(person.id === id) {
                    ret = person;
                }
            });
            return ret;
        };


        this.addEmployee = function(employee) {
            this.persons.push(employee);
        }
    });