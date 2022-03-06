const express = require("express");

const routes = express.Router();

routes.get("/", (request, response) => {
    return response.json({
        evento : "O.Finances",
        Author: "Willian C Santos"
    });
});

module.exports = routes;