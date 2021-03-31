System.register([], function (exports_1, context_1) {
    "use strict";
    var Cars;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Cars = class Cars {
                constructor() {
                    this._cars = [];
                }
                Adiciona(car) {
                    this._cars.push(car);
                }
                Copy() {
                    return [].concat(this._cars);
                }
            };
            exports_1("Cars", Cars);
        }
    };
});
