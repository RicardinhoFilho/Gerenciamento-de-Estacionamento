System.register([], function (exports_1, context_1) {
    "use strict";
    var Car;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Car = class Car {
                constructor(_placa, _modelo, _cor, _classificacao, _horario) {
                    this._placa = _placa;
                    this._modelo = _modelo;
                    this._cor = _cor;
                    this._classificacao = _classificacao;
                    this._horario = _horario;
                }
            };
            exports_1("Car", Car);
        }
    };
});
