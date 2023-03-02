"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Tiger = exports.Lion = exports.Dog = void 0;
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.getname = function () {
        return this.name;
    };
    Animal.prototype.speak = function (phrase) {
        if (phrase === void 0) { phrase = 'I\'m an animal =)'; }
        return phrase;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.speak = function (phrase) {
        return _super.prototype.speak.call(this, phrase.replace(/ |$/g, ' borf ')).trim();
    };
    return Dog;
}(Animal));
exports.Dog = Dog;
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lion.prototype.speak = function (phrase) {
        return _super.prototype.speak.call(this, phrase.replace(/ |$/g, ' roar ')).trim();
    };
    return Lion;
}(Animal));
exports.Lion = Lion;
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tiger.prototype.speak = function (phrase) {
        return _super.prototype.speak.call(this, phrase.replace(/ |$/g, ' grrr ')).trim();
    };
    return Tiger;
}(Animal));
exports.Tiger = Tiger;
