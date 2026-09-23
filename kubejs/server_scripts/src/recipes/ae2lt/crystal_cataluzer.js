ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ae2lt/crystal_cataluzer/"

    const recipes = [
        ['justdirethings:time_crystal_block','justdirethings:time_crystal']
    ]

    recipes.forEach(([catalyst,output]) =>{
        event.custom({
            "type": "ae2lt:crystal_catalyzer",
            "catalyst": {
                "item": catalyst
            },
            "catalystCount": 1,
            "output": {
                "id": output,
                "count": 1
            },
            "energyPerCycle": 100000,
            "lightningCost": 1,
            "lightningTier": "high_voltage"
        }).id(prefix + output.substring(output.indexOf(":") + 1))
    })
})