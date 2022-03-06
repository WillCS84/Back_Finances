const express = require("express");
const projectController = require('./controller/projectController')

const routes = express.Router();

routes.get('/projections', projectController.read);
routes.post("/projections", projectController.create);
routes.put("/projections", projectController.update);
routes.delete("/projections", projectController.delete);

module.exports = routes;