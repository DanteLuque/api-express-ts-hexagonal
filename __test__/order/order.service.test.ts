import { OrderService } from '../../src/order-management/application/order.service';
import { IOrderRepository } from '../../src/order-management/domain/interfaces/order.interface';
import { Order } from '../../src/order-management/domain/order';
import { OrderBuilder } from './builder';

class MockOrderRepository implements IOrderRepository {
  private order: Order[] = [];

  async addOrder(order: Order) {
    this.order.push(order);
    return order;
  }
}
//testeando la logica de negocio en lugar de los endpoints
describe('OrderService', () => {
  let orderService: OrderService;

  beforeEach(() => { //beforeEach() en jest, Ejecuta una función antes de que se ejecute cada una de las pruebas de este archivo
    //inyección de dependencias (procedimiento que se implementa en order.route.ts)
    //simulando para los test (usando un arreglo, no la database)
    var mockOrderRepository = new MockOrderRepository();
    orderService = new OrderService(mockOrderRepository);
  });

  test("addOrder adds a order to the database", async () => {
    const orderBuilder = new OrderBuilder()
      .withProductId(1)
      .withTotal(2)

      const args = orderBuilder.toArgs();
        const order = orderBuilder.build();

    const addedOrder = await orderService.addOrder(...args);

    expect(addedOrder.productId).toBe(order.productId);
    expect(addedOrder.total).toBe(order.total);
  });
})