var source;

if (creep.memory.sourceId) {
    source = Game.getObjectById(creep.memory.sourceId);
} else {
    //Find all active sources
    //Count the number of creeps targeting that source
    //Count the accessible adjacent squares using something like room.lookForAt(...)
    //source = ... the source you selected
}

if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
}