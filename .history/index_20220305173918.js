const express = require ("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    return response.json({
        evento : "O.Finances"
    });
});

app.listen(3333);