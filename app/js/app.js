System.register(["./Controller/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, form;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            form = document.querySelector(".form");
            form.addEventListener("submit", (event) => {
                const placa = document.querySelector("#Placa");
                const carro = document.querySelector("#Carro");
                const cor = document.querySelector("#Cor");
                const classe = document.querySelector('input[name="Category"]:checked');
                event.preventDefault();
                const cadastrar = new index_1.CadastroController(placa.value, carro.value, cor.value, parseInt(classe.value));
                cadastrar.Adiciona();
            });
        }
    };
});
