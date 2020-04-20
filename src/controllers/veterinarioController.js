const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const veterinario = await connection('veterinario').select('*');
        return response.json(veterinario);
    },

    async create(request, response) {
        const { nome, crmv, endereco, cidade, estado, whatsapp, email } = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('veterinario').insert({
            id,
            nome,
            crmv,
            endereco,
            cidade,
            estado,
            whatsapp,
            email,
        })
    
        return response.json({ id });
    }
};