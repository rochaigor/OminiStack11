const connection = require('../database/connection');

module.exports = {

    async index(requets, response) {
        const { page = 1} = request.query;

        const [count] = await connection('cliente').count();
        
        const cliente = await connection('cliente')
        .join('veterinario', 'veterinario_id', '=', 'cliente.veterinario_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([ 'cliente.*', 'veterinario.nome' ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(cliente);
    },

    async create(request, response) {
        const { nome, cpf, endereco, cidade, estado, whatsapp, email } = request.body;
        const veterinario_id = request.headers.authorization;

        const [id] = await connection('cliente').insert({
            nome,
            cpf,
            endereco,
            cidade,
            estado,
            whatsapp,
            email,
            veterinario_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const veterinario_id = request.headers.authorization;

        const cliente = await connection('cliente')
        .where('id', id)
        .select('veterinario_id')
        .first();

    if (cliente.veterinario_id != veterinario_id) {
        return response.status(401).json({ error: 'Operação não autorizada!' });
    }

    await connection('cliente').where('id', id).delete();

    return response.status(204).send();
  }
};