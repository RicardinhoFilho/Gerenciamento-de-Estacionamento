System.register(["../Models/index", "../Views/TableView"], function (exports_1, context_1) {
    "use strict";
    var index_1, TableView_1, CadastroController, Category;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (TableView_1_1) {
                TableView_1 = TableView_1_1;
            }
        ],
        execute: function () {
            CadastroController = class CadastroController {
                constructor(inputPlaca, inputModelo, inputCor, inputCategory) {
                    this._tableBody = document.querySelector(".body");
                    this._carsList = new index_1.Cars();
                    this._tableView = new TableView_1.TableView(this._tableBody);
                    this._inputPlaca = inputPlaca;
                    this._inputModelo = inputModelo;
                    this._inputCor = inputCor;
                    this._inputCategory = inputCategory;
                }
                Adiciona() {
                    const data = new Date();
                    let horario = (data.getHours());
                    const placa = this._inputPlaca;
                    const modelo = this._inputModelo;
                    const cor = this._inputCor;
                    const category = this._inputCategory;
                    console.log(placa);
                    const car = new index_1.Car(placa, modelo, cor, category, horario);
                    this._carsList.Adiciona(car);
                    this._tableView.update(this._carsList);
                }
            };
            exports_1("CadastroController", CadastroController);
            (function (Category) {
                Category[Category["Pequeno"] = 0] = "Pequeno";
                Category[Category["M\u00E9dio"] = 1] = "M\u00E9dio";
                Category[Category["Grande"] = 2] = "Grande";
            })(Category || (Category = {}));
        }
    };
});
