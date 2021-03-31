import { Car, Cars } from "../Models/index"
import { TableView } from "../Views/TableView";
export class CadastroController {

    private _inputPlaca: string;
    private _inputModelo: string;
    private _inputCor: string;
    private _inputCategory: number;

    private _tableBody:any= document.querySelector("tbody");

    
    private _tableView = new TableView(this._tableBody);


    constructor(inputPlaca:string,inputModelo:string,inputCor:string,inputCategory: number ) {

       this._inputPlaca = inputPlaca;
       this._inputModelo = inputModelo;
       this._inputCor = inputCor;
       this._inputCategory = inputCategory;

       //this._tableView.update(this._carsList);
    }

    //Acção Submit
    Adiciona(): void{

        
        let carsList = new Cars();
        const data = new Date();
        let horario=(data.getHours());

        const placa = this._inputPlaca;
        const modelo = this._inputModelo;
        const cor = this._inputCor;
        const category = this._inputCategory;

        //console.log("Olha isso aqui" + carsList.Copy());

        const car = new Car(placa, modelo, cor,category, horario);

        // console.log("Olha isso aqui");

        carsList.Adiciona(car);
        this._tableView.update(carsList);

    }

}

