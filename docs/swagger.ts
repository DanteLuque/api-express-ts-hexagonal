import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.0",
    info: {
        title: "API Express TS Hexagonal",
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3001"
        }
    ],
    components: {
        /*
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        },
        */
        schemas: {
            Product: {
                type: "object",
                required: ["name", "price"],
                properties: {
                    productId: {
                        type: "number",
                        readOnly: true
                    },
                    name: {
                        type: "string"
                    },
                    price: {
                        type: "number"
                    }
                }
            },
            order: {
                type: "object",
                required: ["total", "productId"],
                properties: {
                    orderId: {
                        type: "number",
                        readOnly: true
                    },
                    total: {
                        type: "number"
                    },
                    productId: {
                        type: "number"
                    },
                    createdAt: {
                        type: "Date",
                        readOnly: true
                    },
                    
                }
            }
        }
    
    }
}

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./docs/**/*.ts"],
} 

export default swaggerJSDoc(swaggerOptions);