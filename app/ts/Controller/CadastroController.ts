import { Car, Cars } from "../Models/index"
import { TableView } from "../Views/TableView";
export class CadastroController {

    private _inputPlaca: string;
    private _inputModelo: string;
    private _inputCor: string;
    private _inputCategory: number;

    private _tableBody:HTMLElement= document.querySelector(".body");

    private _carsList = new Cars();
    private _tableView = new TableView(this._tableBody);


    constructor(inputPlaca:string,inputModelo:string,inputCor:string,inputCategory: number ) {

       this._inputPlaca = inputPlaca;
       this._inputModelo = inputModelo;
       this._inputCor = inputCor;
       this._inputCategory = inputCategory;
    }

    //Acção Submit
    Adiciona(): void{

        

        const data = new Date();
        let horario=(data.getHours());

        const placa = this._inputPlaca;
        const modelo = this._inputModelo;
        const cor = this._inputCor;
        const category = this._inputCategory;

        console.log(placa);

        const car = new Car(placa, modelo, cor,category, horario);

        this._carsList.Adiciona(car);
        this._tableView.update(this._carsList);

        

    }
    

}