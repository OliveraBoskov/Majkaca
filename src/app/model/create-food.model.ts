import { Food } from "./food.model";

export class CreateFood {
    constructor() {}

    public name: string
    public price: number
    public description: string
    public typeF: string
    public sideDishIds: number[]

    setFoodValue(food: Food) {
        this.name = food.name;
        this.price = food.price;
        this.description = food.description;
        this.typeF = food.typeF;
    }
}