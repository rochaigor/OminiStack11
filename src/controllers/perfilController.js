const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const veterinario_id = request.headers.authorization;

        const cliente = await connection('cliente')
        .where('veterinario_id', veterinario_id)
        .select('*');

        return response.json(cliente);
    }
}