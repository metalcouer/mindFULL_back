
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('saved').del()
    .then(function () {
      // Inserts seed entries
      return knex('saved').insert([
        {id: 1,
         user_id: 1,
         stretch_id: 7
        },
        {id: 2,
          user_id: 1,
          stretch_id: 4
         },
         {id: 3,
          user_id: 1,
          stretch_id: 6
         },
         {id: 4,
          user_id: 1,
          stretch_id: 3
         },
        
      ]);
    });
};
