import { Product } from "@prisma/client";

export interface IProductRepository{
    addProduct(product: Product): Promise<Product>;
}