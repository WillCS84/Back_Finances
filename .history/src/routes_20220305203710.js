const express = require("express");
const projectController = require('./controller/projectController')

const routes = express.Router();

routes.get('/projections', );

routes.post("/projections", projectController.create);

module.exports = routes;