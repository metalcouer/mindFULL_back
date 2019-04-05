exports.up = function(knex, Promise) {
    return knex.schema.createTable('stretches', table => {
        table.increments()
        table.string('ache_id').notNullable().defaultsTo('')
        table.string('name').notNullable().defaultsTo('')
        table.string('description').notNullable().defaultsTo('')
        table.string('img').notNullable().defaultsTo('')
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('stretches')  
};