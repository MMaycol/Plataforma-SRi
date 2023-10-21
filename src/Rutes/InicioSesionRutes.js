import express from 'express';
const router = express.Router();
import {Logins, Login,registerUser } from  "../Controller/InicioSesionController"  // Asegúrate de ajustar la ruta

router.get('/logins', (req, res)=>{
    res.render('Login.ejs')
})

router.post("/registerUser", registerUser);
router.post("/Login", Login);  // Utiliza el método Login que exportaste


export default router;
