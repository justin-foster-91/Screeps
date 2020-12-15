var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleBuilder = require("role.builder");

module.exports.loop = function () {
  // How to build containers
  // How to harvest multiple sources

  // If memory contains a creep that doesn't exist anymore, delete it from memory.
  // Why is this necessary?
  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log("Clearing non-existing creep memory:", name);
    }
  }

  // const creepSpawnOrder = () => {

  // }

  // Isolate and define creep with the role of Harvester
  // What is _.filter ?
  const spawnCreeps = (role, spawner) => {
    let units = _.filter(
      Game.creeps,
      (creep) => creep.memory.role == `${role}`
    );
    if (units.length < 4) {
      // Possibly slice off spawner number. Requires naming convention
      let newName =
        `${role.charAt(0).toUpperCase() + role.slice(1)}` + spawner + Game.time;
      console.log("Spawning new harvester: " + newName);
      Game.spawns[spawner].spawnCreep([WORK, CARRY, MOVE, MOVE], newName, {
        memory: { role: `${role}` },
      });
    }
  };

  spawnCreeps("harvester", "Spawn1");
  spawnCreeps("upgrader", "Spawn1");
  spawnCreeps("builder", "Spawn1");

  // If Spawn1 is making a creep, show the role being spawned
  if (Game.spawns["Spawn1"].spawning) {
    // Assigns the creep name to spawningCreep variable
    var spawningCreep = Game.creeps[Game.spawns["Spawn1"].spawning.name];
    // Displays working icon and the role of the creep being spawned
    Game.spawns["Spawn1"].room.visual.text(
      "🛠️" + spawningCreep.memory.role,
      Game.spawns["Spawn1"].pos.x + 1,
      Game.spawns["Spawn1"].pos.y,
      { align: "left", opacity: 0.8 }
    );
  }

  var tower = Game.getObjectById("97525daefefc04fa54f53707");
  // If tower exists...
  if (tower) {
    // If there is a damaged structure, use the tower to repair it
    var closestDamagedStructure = tower.pos.findClosestByRange(
      FIND_STRUCTURES,
      {
        filter: (structure) => structure.hits < structure.hitsMax,
      }
    );
    if (closestDamagedStructure) {
      tower.repair(closestDamagedStructure);
    }

    // If there is a hostile, attack it
    var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if (closestHostile) {
      tower.attack(closestHostile);
    }
  }

  // If harvester, upgrader, or builder exist, then run their code
  for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    if (creep.memory.role == "harvester") {
      roleHarvester.run(creep);
    }
    if (creep.memory.role == "upgrader") {
      roleUpgrader.run(creep);
    }
    if (creep.memory.role == "builder") {
      roleBuilder.run(creep);
    }
  }
};
