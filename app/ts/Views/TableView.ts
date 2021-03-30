import { CadastroController } from '../Controller/index';
import { Cars } from '../Models/index';
export class TableView {

    private _carros: Cars;
    private _element: HTMLElement;

    constructor(elemento: HTMLElement) {

        this._element = elemento;
    }

    template(model: Cars): string {

        let teste = `
        ${model.Copy().map(carro =>


            ` 
                <tr>
                    <td scope="col">${carro._placa} </td>
                    <td scope="col"> ${carro._modelo} </td>
                    <td scope="col"> ${carro._cor} </td>
                    <td scope="col">${this.translateCategory(carro._classificacao)}</td>
                    <td scope="col"> ${carro._horario} </td>
                </tr>
               
                `


        ).join('')};
    `

        this._element.innerHTML = teste;

        return
        `
     ${model.Copy().map(carro =>


            `
            
             <td>${carro._placa} < /td>
             < td > ${carro._modelo} < /td>
             < td > ${carro._cor} < /td>
             < td > ${carro._horario} < /td>
            
             `


        ).join(' ')};
 `
    }


    update(model: Cars) {

        //model.Copy();
        //let template: string = this.template(model);
        //template = template.replace(/<script>[\s\S]*?<\/script>/, '');//Escapando qualquer tipod e script
        //this._element.innerHTML = template;

        this.template(model);

        //console.log("ESTE" + JSON.stringify(template));

    }

    translateCategory(category: number): string {

        const result: string[] = ['Pequeno', 'Médio', 'Grande'];

        return result[category];
    }

}

