exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', table => {
            table.increments()
            table.string('name').notNullable().defaultsTo('')
            table.string('email').notNullable().defaultsTo('')
            table.integer('age').notNullable().defaultsTo(0)
        }),
        knex.schema.createTable('stretches', table => {
            table.increments()
            table.string('ache').notNullable().defaultsTo('')
            table.string('name').notNullable().defaultsTo('')
            table.string('description', 1000).notNullable().defaultsTo('')
            table.string('img').notNullable().defaultsTo('')
        }),
      
        knex.schema.createTable('saved', table => {
        table.increments()
        table.integer('user_id').notNullable()
        table.foreign('user_id').references('users.id')
        table.integer('stretch_id').notNullable()
        table.foreign('stretch_id').references('stretches.id')
        
    }),
    
]) 
};

exports.down = function(knex, Promise) {
    return Promise.all ([
               knex.schema.dropTable('saved'),
               knex.schema.dropTable('stretches'),
               knex.schema.dropTable('users'),  

            ])
};