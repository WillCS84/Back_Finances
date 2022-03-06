const express = require ("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    return response.json({
        evento : "O.Finances",
        Author: "Willian C Santos"
    });
});

app.listen(3333);