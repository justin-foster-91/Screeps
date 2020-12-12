Game.spawns['Spawn1'].room.controller.activateSafeMode();
Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );
Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE, MOVE], newName, 
  {memory: {role: 'harvester'}})
Game.spawns['Spawn1'].room.createConstructionSite( 22, 23, STRUCTURE_EXTENSION );

//Move harvester to x
Game.creeps['Harvester451'].moveTo('Spawn1');
///This partially worked. It only moved for 1 tick
Game.creeps['Harvester451'].moveTo(26, 22);


//Build road
Game.spawns['Spawn1'].room.createConstructionSite( 25, 22, STRUCTURE_ROAD );

//Find parking spot
var parking = creep.room.find(FIND_MY_SPAWNS);
Game.creeps['Harvester451'].moveTo(parking[0].pos.x-2, parking[0].pos.y);
creep.moveTo(parking[0].pos.x-2, parking[0].pos.y);

//Checking for constructions site at pos
Game.rooms.sim.lookForAt(LOOK_CONSTRUCTION_SITES, 25, 22);