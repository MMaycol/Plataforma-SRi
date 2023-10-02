import app from "./app";
import path from "path";

const express = require('express');

// Define la ruta para la página de inicio y renderiza una vista
app.get('/', (req, res) => {
    res.render('inicio', { title: 'Página de Inicio' });
  });

app.set('view engine','ejs');
app.use(express.static(path.join(process.cwd(), 'public')));

app.listen(app.get('port'));


console.log("Tamos activo")