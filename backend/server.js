// const http = require('http');
const express = require('express');
const connection = require('./connection');
const driverRoute = require('./routes/drivers');
const port = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/driver', driverRoute);


// const server = http.createServer(app);
app.listen(port, () => console.log("listening on port " + port));