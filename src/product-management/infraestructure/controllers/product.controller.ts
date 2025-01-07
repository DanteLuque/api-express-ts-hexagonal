import { Request, Response } from 'express';
import { ProductService } from '../../application/product.service';

export class ProductController{
    private productService: ProductService;

    constructor(productService: ProductService){
        this.productService = productService;
    }

    public async addProduct(req: Request, res: Response): Promise<void>{
        const {name, price} = req.body;

        try{
            const product = await this.productService.addProduct(name, price);
            res.status(201).json(product);
        }catch(error: any){
            res.status(400).json({error: error.message});
        }
    }
}