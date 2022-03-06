const express = require("express");
const crypto = require("crypto");
const connection = require('./database/connection');

const routes = express.Router();

routes.get('/projections', async (request, response) => {
    const projections = await connection('Projection').select('*');

    return response.json(projections);
});

routes.post("/projections", async (request, response) => {
    const{ description, value, date, type, status } = request.body;

    const id = crypto.randomInt(3);
    let id = 0;

    await connection('Projection').insert({
        id,
        description,
        value,
        date,
        type,
        status,
    });

    return response.json({id});
});

module.exports = routes;