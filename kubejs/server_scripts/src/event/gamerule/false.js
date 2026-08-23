LevelEvents.loaded(event =>{
  //doTraderSpawning
  setRule(event,"doTraderSpawning","false",true)

  //doMobSpawning
  setRule(event,"doMobSpawning","false",true)

  //mobGriefing
  setRule(event,"mobGriefing","false",true)

  //doWeatherCycle
  setRule(event,"doWeatherCycle","false",true)
  event.getServer().overworld().setWeatherParameters(20,0,false,false)
})

LevelEvents.tick(event =>{
  //doTraderSpawning
  setRule(event,"doTraderSpawning","false",false)

  //doMobSpawning
  setRule(event,"doMobSpawning","false",false)

  //mobGriefing
  setRule(event,"mobGriefing","false",false)

  //doWeatherCycle
  setRule(event,"doWeatherCycle","false",false)
})