export class Order {
    orderId:    number;
    total:      number;
    productId:  number;
    createdAt:  Date;

    constructor(productId: number,total:number){

        this.orderId = -1;
        this.productId = productId;
        this.total = total;
        this.createdAt = new Date();
    }


    
}