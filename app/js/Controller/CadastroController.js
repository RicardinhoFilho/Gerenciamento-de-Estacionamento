System.register(["../Models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, CadastroController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            CadastroController = (function () {
                function CadastroController() {
                    this._carsList = new index_1.Cars();
                    this._inputPlaca = document.querySelector("#Placa");
                    this._inputModelo = document.querySelector("#Carro");
                    this._inputCor = document.querySelector("#Cor");
                    this._inputCategory = document.querySelector('input[name="Category"]:checked');
                }
                CadastroController.prototype.Adiciona = function (event) {
                    event.preventDefault();
                    var data = new Date();
                    var horario = (data.getHours());
                    var placa = this._inputPlaca.value;
                    var modelo = this._inputModelo.value;
                    var cor = this._inputCor.value;
                    var category = parseInt(this._inputCategory.value);
                    console.log(placa);
                    var car = new index_1.Car(placa, modelo, cor, category, horario);
                    this._carsList.Adiciona(car);
                };
                return CadastroController;
            }());
            exports_1("CadastroController", CadastroController);
        }
    };
});
