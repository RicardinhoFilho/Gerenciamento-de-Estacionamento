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
                template(model) {
                    let teste = `
        ${model.Copy().map(carro => ` 
                <tr>
                    <td scope="col">${carro._placa} </td>
                    <td scope="col"> ${carro._modelo} </td>
                    <td scope="col"> ${carro._cor} </td>
                    <td scope="col">${this.translateCategory(carro._classificacao)}</td>
                    <td scope="col"> ${carro._horario} </td>
                </tr>
               
                `).join('')};
    `;
                    this._element.innerHTML = teste;
                    return;
                    `
     ${model.Copy().map(carro => `
            
             <td>${carro._placa} < /td>
             < td > ${carro._modelo} < /td>
             < td > ${carro._cor} < /td>
             < td > ${carro._horario} < /td>
            
             `).join(' ')};
 `;
                }
                update(model) {
                    this.template(model);
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
