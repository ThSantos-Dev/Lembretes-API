require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');



const routes = require('./routes');
const connectToDatabase = require('./database');
connectToDatabase();

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json())
app.use(routes);

app.listen(port, () => {
    console.log(`Backend started at http://localhost:${port}`);
});