const express = require("express");

const routes = express.Router();

routes.post("/projections", (request, response) => {
    const{ description, value, date, type, status } = request.body;

    
    
    return response.json();
});

module.exports = routes;