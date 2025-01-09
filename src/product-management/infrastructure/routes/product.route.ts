import express from 'express';
import { ProductController } from "../controllers/product.controller";
import { ProductService } from "../../application/product.service";
import { ProductRepositoryPrismaSqlite } from "../product.repository";

const productRepository = new ProductRepositoryPrismaSqlite();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

const productRoutes = express.Router();

productRoutes.post('/add', (req, res) => productController.addProduct(req, res));

export default productRoutes;
