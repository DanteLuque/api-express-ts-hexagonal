import { ProductService } from "../../src/product-management/application/product.service";
import { IProductRepository } from "../../src/product-management/domain/interfaces/product.interface";
import { Product } from "../../src/product-management/domain/product";
import { ProductBuilder } from "./builder";

class MockProductRepository implements IProductRepository{
    private product: Product[] = [];
    
    async addProduct(product: Product){
        this.product.push(product);
        return product;
    }
}

describe('ProductService', ()=>{
    let productService: ProductService;

    beforeEach(()=>{
        var mockProductRepository = new MockProductRepository();
        productService = new ProductService(mockProductRepository);
    });

    test("addProduct adds a product to the database", async ()=>{
        const product = new ProductBuilder()
        .withName("Product_1")
        .withPrice(100.10)
        .build();
        
        const addedProduct = await productService.addProduct("Product_1",100.10);

        expect(addedProduct.name).toBe(product.name);
        expect(addedProduct.price).toBe(product.price);
    });
})