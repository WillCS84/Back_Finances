const express = require("express");
const connection = require('./database/connection');
const projectController = require('./controller/projectController')

const routes = express.Router();

routes.get('/projections', async (request, response) => {
    const projections = await connection('Projection').select('*');

    return response.json(projections);
});

routes.post("/projections", projectController.create);

module.exports = routes;