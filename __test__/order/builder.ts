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


    toArgs(): [number, number] {
        return [this.productId, this.total];
      }

    build(): Order {
            return new Order(this.productId, this.total);
        }

}