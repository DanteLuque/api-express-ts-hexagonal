import {app} from './app';

import orderRoutes from './order-management/infrastructure/routes/order.route';
import productRoutes from './product-management/infrastructure/routes/product.route';


app.use('/order', orderRoutes); 
app.use('/product', productRoutes);



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
  })