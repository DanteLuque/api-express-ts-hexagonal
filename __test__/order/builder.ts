import { Order } from "../../src/order-management/domain/order";

export class OrderBuilder{
    private productId: number = 0;
    private total: number = 0;


    withProductId(productId: number): OrderBuilder{
        this.productId = productId;
        return this;
    }

    withTotal(total: number): OrderBuilder{
        this.total = total;
        return this;
    }

    build(): Order {
            return new Order(this.productId, this.total);
        }

}