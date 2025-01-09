import express from 'express';
import { OrderController } from '../controllers/order.controller';
import { OrderService } from '../../application/order.service';
import { OrderRepositoryPrismaSqlite } from '../order.repository';

//inyectando dependencia
const orderRepository = new OrderRepositoryPrismaSqlite();
const orderService = new OrderService(orderRepository);
const orderController = new OrderController(orderService);


const orderRoutes = express.Router();

orderRoutes.post('/add', (req, res) => orderController.addOrder(req, res));

export default orderRoutes;
