import express from 'express';
import { LoginAdmin, RegisterAdmin } from '../Controllers/AdminControllers.js';
const router = express.Router()
router.post('/register',RegisterAdmin)
router.post('/login',LoginAdmin)
export default router