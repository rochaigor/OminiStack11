exports.up = function(knex) {
    return knex.schema.createTable('veterinario', function(table){
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('crmv').notNullable();
        table.string('endereco').notNullable();
        table.string('cidade').notNullable();
        table.string('estado').notNullable();
        table.string('whatsapp').notNullable();
        table.string('email').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('veterinario')
  };