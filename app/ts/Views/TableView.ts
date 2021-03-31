import { CadastroController } from '../Controller/index';
import { Cars } from '../Models/index';
export class TableView {

    private _carros: Cars;
    private _element: HTMLElement;

    constructor(elemento: HTMLElement) {

        this._element = elemento;
    }

    update(model: Cars): void {
        let tr = document.createElement('tr')
        let td = `
        ${model.Copy().map(carro =>


            ` 
                
                    <td scope="col">${carro._placa} </td>
                    <td scope="col"> ${carro._modelo} </td>
                    <td scope="col"> ${carro._cor} </td>
                    <td scope="col">${this.translateCategory(carro._classificacao)}</td>
                    <td scope="col"> ${carro._horario} </td>
                
               
                `


        ).join('')};
    `
        this._element.appendChild(tr);
        tr.innerHTML = td;
    }




    private translateCategory(category: number): string {

        const result: string[] = ['Pequeno', 'Médio', 'Grande'];

        return result[category];
    }

}

