let creepRoleList = {
  harvester: {
    name: ,
    spawner: ,
    quantity: ,
    parts: ,
    priority: ,
  },
  upgrader: {

  },
  builder: {

  },
}

const creepSpawnOrder = () => {

}

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