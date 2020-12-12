// main.js
const spawnCreeps = (role, spawner) => {
  let units = _.filter(Game.creeps, (creep) => creep.memory.role == `${role}`);
  if (units.length < 2) {
    // Possibly slice off spawner number. Requires naming convention
    let newName = `${role.charAt(0).toUpperCase() + word.slice(1)}`+ spawner + Game.time;
    console.log("Spawning new harvester: " + newName);
    Game.spawns[spawner].spawnCreep([WORK, CARRY, MOVE, MOVE], newName, {
      memory: { role: `${role}` },
    });
  }
}

spawnCreeps('harvester', 'Spawner1');
spawnCreeps('upgrader', 'Spawner1');
spawnCreeps('builder', 'Spawner1');


var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == "harvester");
if (harvesters.length < 2) {
  var newName = "Harvester" + Game.time;
  console.log("Spawning new harvester: " + newName);
  Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE, MOVE], newName, {
    memory: { role: "harvester" },
  });
}

var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == "upgrader");
if (upgraders.length < 2) {
  var newName = "Upgrader" + Game.time;
  console.log("Spawning new upgrader: " + newName);
  Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE, MOVE], newName, {
    memory: { role: "upgrader" },
  });
}

var builders = _.filter(Game.creeps, (creep) => creep.memory.role == "builder");
if (builders.length < 2) {
  var newName = "Builder" + Game.time;
  console.log("Spawning new builder: " + newName);
  Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE, MOVE], newName, {
    memory: { role: "builder" },
  });
}
