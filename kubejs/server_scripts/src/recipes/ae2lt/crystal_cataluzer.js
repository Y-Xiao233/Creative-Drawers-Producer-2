ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ae2lt/crystal_cataluzer/"

    const recipes = [
        ['justdirethings:time_crystal_block','justdirethings:time_crystal'],
        ['extendedae_plus:lattra_crystal_block','extendedae_plus:lattra_crystal']
    ]


    const speical_recipes = [
        ["kubejs:spirit_shard","cdp2:liquid_unknown","kubejs:spirit_shard"],
        ['malum:twisted_rock',"cdp2:liquid_unknown",'malum:twisted_rock']
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

    speical_recipes.forEach(([catalyst,fluid,output]) =>{
        event.custom({
            "type": "ae2lt:crystal_catalyzer",
            "catalyst": {
                "item": catalyst
            },
            "catalystCount": 1,
            "inputFluid": {
                "id": fluid,
                "amount": 1000
            },
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