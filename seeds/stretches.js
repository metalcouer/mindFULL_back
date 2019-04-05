
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stretches').del()
    .then(function () {
      // Inserts seed entries
      return knex('stretches').insert([
        {id: 1, 
         ache_id: 1,
         name: 'finger stretch',
         description: '',
         img:''
        },
        { id: 2, 
          ache_id: 1,
          name: 'finger stretch 2',
          description: '',
          img:''
         },
         {id: 3, 
          ache_id: 2,
          name: 'wrist',
          description: '',
          img:''
         },
         {id: 4, 
          ache_id: 2,
          name: 'wrist stretch 2',
          description: '',
          img:''
         },
         {id: 5, 
          ache_id: 3,
          name: 'forearm',
          description: '',
          img:''
         },
         {id: 6, 
          ache_id: 3,
          name: 'forearm stretch 2',
          description: '',
          img:''
         },
         {id: 7, 
          ache_id: 4,
          name: 'bicep ',
          description: '',
          img:''
         },
         {id: 8, 
          ache_id: 4,
          name: 'bicep',
          description: '',
          img:''
         },
         {id: 9, 
          ache_id: 5,
          name: 'shoulder',
          description: '',
          img:''
         },
         {id: 10, 
          ache_id: 5,
          name: 'shoulder stretch 2',
          description: '',
          img:''
         },
         {id: 11, 
          ache_id: 6,
          name: 'Upper Back',
          description: '',
          img:''
         },
         {id: 12, 
          ache_id: 6,
          name: 'Upper Back stretch 2',
          description: '',
          img:''
         },
         {id: 13, 
          ache_id: 7,
          name: 'Neck',
          description: '',
          img:''
         },
         {id: 14, 
          ache_id: 7,
          name: 'Neck',
          description: '',
          img:''
         },
         {id: 15, 
          ache_id: 8,
          name: 'Lower Back',
          description: '',
          img:''
         },
         {id: 16, 
          ache_id: 9,
          name: 'Lower Back',
          description: '',
          img:''
         },
      ]);
    });
};
