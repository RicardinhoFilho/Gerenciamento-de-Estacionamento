import{Car} from "./index"

export class Cars{

    private _cars: Car[] = [];

    Adiciona(car: Car){
        this._cars.push(car);
    }

    Copy(){
        return([] as Car[]).concat(this._cars);
    }
}