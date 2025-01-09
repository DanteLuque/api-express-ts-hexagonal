import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSetup from '../docs/swagger';

export const app = express();
app.use(express.json())


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSetup));


