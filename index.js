const express = require('express'); //express
const cors = require('cors'); //cors
require('dotenv').config(); //dotenv

const bcraRoutes = require('./routes/bcraRoutes'); //routes

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/credit-status', bcraRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});