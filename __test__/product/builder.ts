import { Product } from "../../src/product-management/domain/product";

export class ProductBuilder{
    private name:  string = "";
    private price: number = 0.0;

    withName(name: string): ProductBuilder{
        this.name = name;
        return this;
    }

    withPrice(price: number): ProductBuilder {
        this.price = price;
        return this;
    }

    build(): Product {
        return new Product(this.name, this.price);
    }
}