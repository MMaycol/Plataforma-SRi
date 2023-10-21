import express from 'express';
import config from '../src/config';
import InicioSesionRutes from "./Rutes/InicioSesionRutes";
import InicioRutes from "./Rutes/InicioRutes";
import morgan from "morgan";
import path from "path";
const cookieParser = require('cookie-parser');
const app = express();

// settings
app.set('port', config.port);
// para poder trabajar con las cookies
//app.use(cookieParser());

app.use(express.json());

app.set('Views', path.join(__dirname, 'Views'));

app.set('Views engine', 'ejs');  // Cambio 'views engine' a 'view engine'

app.use(express.static(path.join(process.cwd(), 'Public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(InicioSesionRutes);
app.use(InicioRutes);

export default app;
