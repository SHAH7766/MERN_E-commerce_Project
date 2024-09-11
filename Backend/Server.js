import colors from 'colors'
import { DBconnection } from './Config/Database.js'
import router from './Routes/AdminRouted.js'
import routers from './Routes/UserRoutes.js'
import ProRoutes from './Routes/ProductRoutes.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import express from 'express'
const app  = express()
app.use(express.json())
app.use(cors())
app.use('/api/Admin',router)
app.use('/api/User',routers)
app.use('/api/products',ProRoutes)
const port = process.env.port
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`.bgGreen)
})
DBconnection()

