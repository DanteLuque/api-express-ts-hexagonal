/**
 * @openapi
 * /order/add:
 *   post:
 *     tags:
 *       - Order
 *     summary: Add a order
 *     description: Agregar un orden
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/order'
 *     responses:
 *       201:
 *         description: Se agregó una orden en la base de datos
 *       400:
 *         description: Error de validación
 *     security:
 *       - bearerAuth: []
 */
