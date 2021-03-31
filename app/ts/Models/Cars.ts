import{Car} from "./index"

export class Cars{

    private _cars: Car[] = [];

    Adiciona(car: Car){
        this._cars.push(car);
        // /console.log( "TESTE" + JSON.stringify(this._cars));
    }

    Copy(): Car[]{
        //return([] as Car[]).concat(this._cars);
        //console.log("oLHA AQUI "+ JSON.stringify(this._cars[1]));
        return ([] as Car[]).concat(this._cars);//retornamos uma cópia de nosso array, tornando o verdadeiro imutavel


        
    }
}