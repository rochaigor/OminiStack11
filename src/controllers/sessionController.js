const connection = require('../database/connection');

module.exports = {
async create(request, response) {
    const { id } = request.body;

    const veterinario = await connection('veterinario')
    .where('id', id)
    .select('nome')
    .first();

if (!veterinario) {
    return response.status(400).json({ error: 'Veterinário não encontrado com este ID' })
}

    return response.json(veterinario);
  }
}