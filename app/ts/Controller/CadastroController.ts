import { Car, Cars } from "../Models/index"
export class CadastroController {

    private _inputPlaca: HTMLInputElement;
    private _inputModelo: HTMLInputElement;
    private _inputCor: HTMLInputElement;
    private _inputCategory: HTMLInputElement;

    private _carsList = new Cars();


    constructor() {

        this._inputPlaca = <HTMLInputElement>document.querySelector("#Placa");
        this._inputModelo = <HTMLInputElement>document.querySelector("#Carro");
        this._inputCor = <HTMLInputElement>document.querySelector("#Cor");
        this._inputCategory = <HTMLInputElement>document.querySelector('input[name="Category"]:checked');
    }

    //Acção Submit
    Adiciona(event:Event): void{

        event.preventDefault();

        const data = new Date();
        let horario=(data.getHours());

        const placa = this._inputPlaca.value;
        const modelo = this._inputModelo.value;
        const cor = this._inputCor.value;
        const category = parseInt(this._inputCategory.value);

        console.log(placa);

        const car = new Car(placa, modelo, cor,category, horario);

        this._carsList.Adiciona(car);

        

    }
    

}