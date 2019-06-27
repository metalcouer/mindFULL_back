
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stretches').del()
    .then(function () {
      // Inserts seed entries
      return knex('stretches').insert([
        {id: 1, 
         ache: 'hand',
         name: 'Finger',
         description: 'Reach your right arm straight out, palm facing away from you, finger pointing down. Hold tip of each finger and move one at a time toward chest for gentle stretch. Repeat on your left hand.Throughout exercise, stretch palm and spread fingers away from each other',
         img: 'finger.png'
        },
        { id: 2, 
          ache: 'hand',
          name: 'Wrist',
          description: 'Reach your right arm out in front of you, palm facing away from you and fingers pointing down.Grab the tip of all four fingers with your left hand and draw them toward your chest. Hold for 30 seconds to a minute and release.',
          img:'wrist.png'
         },
         {id: 3, 
          ache: 'arm',
          name: 'Forearm',
          description: 'Stand next to surface that you can lean against. Place both hands on the desk, palms down, with your fingers pointing toward you. Keep your shoulders down and lean your torso back slightly. Try to keep the base of your palms down and slightly bend your elbows in toward your body. Draw the weight of your body into your heels so you lean back and not forward.',
          img:'forearm.png'
         },
         {id: 4, 
          ache: 'arm',
          name: 'Bicep',
          description: 'Place your hands against a wall, palms down and slightly apart. Step both feet slightly back and lean downward until you feel a stretch through the tops of your shoulders and into your biceps. Breathe deeply and try to stretch a little deeper as you exhale. Hold for 30 seconds to a minute or for as long as you like. ',
          img:'bicep.png'
         },
         {id: 5, 
          ache: 'shoulder',
          name: 'Anterior',
          description: 'Clasp your hands behind your back with your palms together, straighten arms and then rotate them so your palms face downward.Raise your arms up and hold until you feel a stretch in your shoulder.',
          img:'anterior.png'
         },
         {id: 6, 
          ache: 'shoulder',
          name: 'Posterior',
          description: 'Hold one arm across your body. Pull your elbow into your chest. You should feel your shoulder gently stretching.',
          img:'posterior.png'
         },
         {id: 7, 
          ache: 'shoulder',
          name: 'Traps',
          description: 'In a seated position, and extend your left arm up toward the ceiling. Bend your left elbow and bring your hand to your back. Use your right hand to gently pull your left elbow over to the right. To deepen the pose, bend your right elbow and bring your right fingertips to clasp your left fingertips. You can use a rope or towel if you can’t reach.',
          img:'traps.png'
         },
         {id: 8, 
          ache: 'neck',
          name: 'Neck',
          description: 'Sitting with feet flat on the ground, Extend your right arm next to your right knee or along the right side of the chair. Place your left hand on the top of your head and slowly tilt your head to the left. Apply gentle pressure with your hand to increase the stretch. To feel a deeper stretch, you can hold onto the seat of the chair. ',
          img:'neck.png'
         },
         {id: 9, 
          ache: 'neck',
          name: 'Shrugs',
          description: 'Grab both hands behind your back, lace fingers together. Gently lift your shoulders. Let them slowly fall. You should feel tension being released as your shoulders drop.',
          img:'shrugs.png'
         },
      ]);
    });
};
