// role.harvester.js

// Get creep current position
let check = creeps.pos()
// Check if position has a structure
if (Game.rooms.sim.lookForAt(LOOK_CONSTRUCTION_SITES, check).length === 0) {
  // If no structure, place road construction site
  Game.spawns['Spawn1'].room.createConstructionSite(check, STRUCTURE_ROAD );
} 
