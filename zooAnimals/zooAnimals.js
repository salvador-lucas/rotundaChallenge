"use strict";
exports.__esModule = true;
var Animals_1 = require("./Animals");
function AnimalsPhrases() {
    var dog = new Animals_1.Dog('jorge el dog');
    console.log(dog.speak('hola miguel'));
    var lion = new Animals_1.Lion('Rudolph the lion');
    console.log(lion.speak('I\'m a lion'));
    var tiger = new Animals_1.Tiger('Samid the tiger');
    console.log(tiger.speak('Lions suck'));
}
AnimalsPhrases();
