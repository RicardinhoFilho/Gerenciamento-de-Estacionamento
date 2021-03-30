import{Car} from "./index"

export class Cars{

    private _cars: Car[] = [];

    Adiciona(car: Car){
        this._cars.push(car);
    }

    Copy(): Car[]{
        //return([] as Car[]).concat(this._cars);
        //console.log("oLHA AQUI "+ JSON.stringify(this._cars));
        return this._cars;

        
    }
}