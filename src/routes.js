const express = require('express');
const routes = express.Router();

const LembreteController = require('./controllers/LembreteController');
const LembreteMiddleware = require('./middlewares/LembreteMiddleware')

routes.get("/lembretes", LembreteController.index);
routes.get("/lembretes/:id", LembreteMiddleware.validateId,LembreteController.findById);
routes.post("/lembretes", LembreteController.store);

routes.put("/lembretes/:id", 
            LembreteMiddleware.validateId, LembreteController.update);

routes.delete("/lembretes/:id", 
                LembreteMiddleware.validateId, LembreteController.delete);

module.exports = routes;
