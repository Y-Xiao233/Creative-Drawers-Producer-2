LevelEvents.loaded(event =>{
  //keepInventory
  setRule(event,"keepInventory","true",true)

  //doMobLoot
  setRule(event,"doMobLoot","true",true)
})
  
LevelEvents.tick(event =>{
  //keepInventory
  setRule(event,"keepInventory","true",false)

  //doMobLoot
  setRule(event,"doMobLoot","true",false)
})