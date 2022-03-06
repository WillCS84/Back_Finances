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

    async read(request, response) {
        const projections = await connection('Projection').select('*');

        return response.json(projections);
    },

    async update(request, response) {
        const description = request.query;
        const descript_project = await connection('Projection').select('description');

        console.log(description);
        console.log(descript_project)

        // if ( description === descript_project ) {
           // await connection('Projection').insert({
           // description,
            //value,
            //date,
            //type,
            //status,
        //});
        //}

        return response.json();
    },

    async delete (request, response) {
        
        console.log(id);

        return response.json();
    }
}