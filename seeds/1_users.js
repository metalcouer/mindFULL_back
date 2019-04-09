
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, 
         name: 'Leo',
         email: 'leonor77@gmail.com',
         age: '25',
         },
        //where email = .com return Stretch id 
        //join user stretch id with streych id
      ]);
    });
};
