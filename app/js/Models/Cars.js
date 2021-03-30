System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Cars;
    return {
        setters: [],
        execute: function () {
            Cars = (function () {
                function Cars() {
                    this._cars = [];
                }
                Cars.prototype.Adiciona = function (car) {
                    this._cars.push(car);
                };
                Cars.prototype.Copy = function () {
                    return [].concat(this._cars);
                };
                return Cars;
            }());
            exports_1("Cars", Cars);
        }
    };
});
