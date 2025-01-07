export class Product{
    productId:      number;
    name:           string;
    price:          number;

    constructor(name: string, price: number){

        this.productId = -1;
        this.name = name;
        this.price = price;
    }
}