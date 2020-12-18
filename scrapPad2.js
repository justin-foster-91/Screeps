// 1) Create spawn order** -> Cycle through to do one of each
// 2) Only run spawn code if spawner is idle
// 3) Implement constructor for new roles & greater detail

// **Check if 3 creeps gathering form source?
const spawnCreeps = (role, spawner) => {
  let newName =
    `${role.charAt(0).toUpperCase() + role.slice(1)}` + `[${spawner.slice(-3)}]` + Game.time;
  console.log("Spawning new harvester: " + newName);
  Game.spawns[spawner].spawnCreep([WORK, CARRY, MOVE, MOVE], newName, {
    memory: { role: `${role}` },
  });
};

const shouldSpawn = (role) => {
  let units = _.filter(
    Game.creeps,
    (creep) => creep.memory.role == `${role}`
  );
  return units.length < 4;
}

const canSpawn = (role, spawner) => {
  return true;
}

if (!Game.spawns["Spawn001"].spawning) {
  if (shouldSpawn('harvester') && canSpawn('harvester', 'Spawn001')){
    spawnCreeps("harvester", "Spawn001");
  } else if (shouldSpawn('upgrader') && canSpawn('upgrader', 'Spawn001')) {
    spawnCreeps("upgrader", "Spawn001");
  } else if (shouldSpawn('builder') && canSpawn('builder', 'Spawn001')) {
    spawnCreeps("builder", "Spawn001");
  }
}


// --->
let spawns = [
  spawnCreeps("harvester", "Spawn1"),
  spawnCreeps("upgrader", "Spawn1"),
  spawnCreeps("builder", "Spawn1")
]

const spawnOrder = (spawns) => {
  spawns.
}
// <---


function CreepRoleConst(role, spawner, quantity, parts, priority) {
  this.role = role,
  this.spawner = spawner,
  this.name = `${role.charAt(0).toUpperCase() + role.slice(1)}` + `[${spawner.slice(-3)}]` + Game.time,
  this.quantity = quantity,
  this.parts = parts,
  this.priority = priority
}

let harvesters = new CreepRoleConst('harvester', 'Spawn001', 4, [WORK, CARRY, MOVE, MOVE], 10)
let upgraders = new CreepRoleConst('upgrader', 'Spawn001', 4, [WORK, CARRY, MOVE, MOVE], 20)
let builders = new CreepRoleConst('builder', 'Spawn001', 4, [WORK, CARRY, MOVE, MOVE], 30)

let roleList = [harvesters, upgraders, builders]

// Array -> Sorted Array?
const creepSpawnOrder = (list) => {
  list.sort(() => )
}