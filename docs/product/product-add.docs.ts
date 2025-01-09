/**
 * @openapi
 * /product/add:
 *   post:
 *     tags:
 *       - Product
 *     summary: Add a product
 *     description: Agregar un producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Se agregó un producto en la base de datos
 *       400:
 *         description: Error de validación
 *     security:
 *       - bearerAuth: []
 */


