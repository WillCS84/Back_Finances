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

        return response.json({ id });
    }
}