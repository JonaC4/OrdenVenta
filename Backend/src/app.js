//configuracion basica del servidor
import express from 'express'
import config from './config'

import  customersRoutes from './routes/customers.routes'
import productsRoutes from './routes/products.routes'


const app = express()


//settings ,configuracion del puerto
app.set('port',config.port)
//middlewares

app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use(customersRoutes,productsRoutes)

export default app




