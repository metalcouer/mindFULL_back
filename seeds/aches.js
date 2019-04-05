
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('aches').del()
    .then(function () {
      // Inserts seed entries
      return knex('aches').insert([
        {id: 1, 
         name: 'Finger',
        },
        {id: 2, 
         name: 'Wrist',
        },
        {id: 3, 
         name: 'Forearm',
        },
        {id: 4, 
          name: 'Bicep',
         },
         {id: 5, 
          name: 'Shoulder',
         },
         {id: 6, 
          name: 'Upper Back',
         },
         {id: 7, 
          name: 'Neck',
         },
         {id: 8, 
          name: 'Lower Back',
         },  
      ]);
    });
};
