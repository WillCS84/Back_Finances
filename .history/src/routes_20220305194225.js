const express = require("express");
const crypto = require("crypto");
const connection = require('./database/connection');

const routes = express.Router();

routes.post("/projections", (request, response) => {
    const{ description, value, date, type, status } = request.body;

    const id = crypto.randomInt(3);

    console.log(id);
    
    return response.json();
});

module.exports = routes;