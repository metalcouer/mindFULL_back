
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, 
         name: 'Diane',
         email: 'metalcouer@gmail.com',
         age: '28'
        },
        {id: 2, 
         name: 'Leo',
         email: 'leonor77@gmail.com',
         age: '25'
         },
    
      ]);
    });
};
