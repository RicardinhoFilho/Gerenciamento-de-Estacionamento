
import { CadastroController } from "./Controller/index"
const form = document.querySelector(".form");




form.addEventListener("submit", (event) => {

    const placa = <HTMLInputElement>document.querySelector("#Placa");
    const carro = <HTMLInputElement>document.querySelector("#Carro");
    const cor = <HTMLInputElement>document.querySelector("#Cor");
    const classe = (<HTMLInputElement>document.querySelector('input[name="Category"]:checked'));
    event.preventDefault();


    const cadastrar = new CadastroController(placa.value, carro.value, cor.value, parseInt(classe.value));

    cadastrar.Adiciona();


})