import express from 'express'

import orderRoutes from './order-management/infraestructure/routes/order.route';
import productRoutes from './product-management/infraestructure/routes/product.route';

const app = express()
app.use(express.json())


app.use('/order', orderRoutes); 
app.use('/product', productRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
  })