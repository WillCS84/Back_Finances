const express = require("express");
const projectController = require('./controller/projectController')

const routes = express.Router();

routes.get('/projections', projectController.read);

routes.post("/projections", projectController.create);

module.exports = routes;