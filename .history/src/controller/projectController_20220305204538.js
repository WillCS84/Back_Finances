const crypto = require("crypto");
const connection = require('../database/connection');

module.exports = {
    
    async create(request, response) {
        const { description, value, date, type, status } = request.body;
        const id = crypto.randomInt(3, 5);

        await connection('Projection').insert({
            id,
            description,
            value,
            date,
            type,
            status,
        });

        return response.json();
    },

    async read (request, response) {
        const projections = await connection('Projection').select('*');

        return response.json(projections);
    },

    async update (request, response) {
        const { description, value, date, type, status } = request.body;

    return response.json(projections);
}
}