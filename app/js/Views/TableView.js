System.register([], function (exports_1, context_1) {
    "use strict";
    var TableView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            TableView = class TableView {
                constructor(elemento) {
                    this._element = elemento;
                }
                update(model) {
                    let tr = document.createElement('tr');
                    let td = `
        ${model.Copy().map(carro => ` 
                
                    <td scope="col">${carro._placa} </td>
                    <td scope="col"> ${carro._modelo} </td>
                    <td scope="col"> ${carro._cor} </td>
                    <td scope="col">${this.translateCategory(carro._classificacao)}</td>
                    <td scope="col"> ${carro._horario} </td>
                
               
                `).join('')};
    `;
                    this._element.appendChild(tr);
                    tr.innerHTML = td;
                }
                translateCategory(category) {
                    const result = ['Pequeno', 'Médio', 'Grande'];
                    return result[category];
                }
            };
            exports_1("TableView", TableView);
        }
    };
});
