import { Request, Response } from 'express';
import { OrderService } from '../../application/order.service';

export class OrderController {
  private orderService: OrderService;

  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  public async addOrder(req: Request, res: Response): Promise<void> {
    
    const { productId, total } = req.body;

    try {
      const order = await this.orderService.addOrder(productId, total);
      res.status(201).json(order); 
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  
  }
}
