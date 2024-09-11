import express from 'express';
import { DeleteUser, GetAllusers, Getsingleuser, LoginUser, RegisterUser } from '../Controllers/UserController.js';
const routers = express.Router()
routers.post('/register',RegisterUser)
routers.post('/login',LoginUser)
routers.delete('/delete/:id',DeleteUser)
routers.get('/users',GetAllusers)
routers.get('/single/:id',Getsingleuser)
export default routers