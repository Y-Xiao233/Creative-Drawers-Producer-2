ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/extendedcrafting/compressor/"

    const recipes = [
        {
            "output":'apothicenchantingaddition:flux_enchanting_table',
            "input":'minecraft:enchanting_table',
            "count":400,
            "catalyst":'kubejs:quantum_prism',
            "id":"flux_enchanting_table"
        },
        {
            "output":'mysticalagradditions:insanium_essence',
            "input":'mysticalagriculture:supremium_essence',
            "count":1000,
            "catalyst":'kubejs:quantum_prism',
            "id":"insanium_essence"
        },
        {
            "output":'occultism:storage_stabilizer_tier2',
            "input":'occultism:storage_stabilizer_tier1',
            "count":400,
            "catalyst":'kubejs:quantum_prism',
            "id":"storage_stabilizer_tier2"
        },
        {
            "output":'mysticalagradditions:creative_essence',
            "input":'cdp2:infinite_essence',
            "count":64,
            "catalyst":'createmoremachines:creative_casing',
            "id":"creative_essence"
        },
        {
            "output":'kubejs:ultra4_hyperdimensional_topological_lattice',
            "input":'ae2lt:hyperdimensional_topological_lattice',
            "count":10240,
            "catalyst":'avaritia:infinity_ingot',
            "id":"ultra4_hyperdimensional_topological_lattice"
        }
    ]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "extendedcrafting:compressor",
            "power_cost": recipe.count * 50,
            "ingredient": {
                "item": recipe.input,
                "count": recipe.count
            },
            "catalyst": {
                "item": recipe.catalyst
            },
            "result": {
                "id": recipe.output
            }
        }).id(prefix + recipe.id)
    })
})