const express = require("express");
const crypto = require("crypto");
const connection = require('./database/connection');

const routes = express.Router();

routes.post("/projections", async (request, response) => {
    const{ description, value, date, type, status } = request.body;

    const id = crypto.randomInt(3);

    await connection('Projection').insert({
        description,
        value,
        date,
        type,
        status,
    });

    return response.json({id});
});

module.exports = routes;