import { IOrderRepository } from '../domain/interfaces/order.interface';
import { Order } from '../domain/order';
import { OrderRules } from '../domain/rules/order.rules';

export class OrderService {
  private orderRepository: IOrderRepository;

  constructor(orderRepository: IOrderRepository){
    this.orderRepository = orderRepository;
  }

  public async addOrder(productId:number, total: number): Promise<Order> {
    OrderRules.validate(total);

    const order: Order = new Order(productId, total);
    return await this.orderRepository.addOrder(order)
  }
}