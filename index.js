const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const router = require('./router');
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Todo API',
            description: 'Todo API to help people keep their todos organised',
            contact: {
                name: 'MPAN Christian'
            },
            servers: ['http://localhost:5000']
        }
    },
    apis: ["index.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//Routes
/**
 * @swagger
 * /:
 * get:
 *  description: Use the request to get all todos
 *  response:
 *      '200':
 *          description: A successful response
 */
app.get('/', (req,res) => {
    res.status(200).send("first endpoint");
})
app.use('/', router);
app.listen(5000, () => {
    console.log('express app listening on port 5000');
})