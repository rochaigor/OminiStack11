exports.up = function(knex) {
    return knex.schema.createTable('cliente', function(table){
        table.increments();

        table.string('nome').notNullable();
        table.decimal('cpf').notNullable();
        table.string('endereco').notNullable();
        table.string('cidade').notNullable();
        table.string('estado').notNullable();
        table.string('whatsapp').notNullable();
        table.string('email').notNullable();

        table.string('veterinario_id').notNullable();

        table.foreign('veterinario_id').references('id').inTable('veterinario');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('cliente')
  }; 
  
