import express from "express";
import config from "./config";

const app =  express();

export default app;
let port;

//settings
app.set('port', port || 3000);
//app.set('port', config.port || 3000);
