ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/actuallyadditions/empowering/"

    const recipes = [
        {
            "output":"actuallyadditions:empowered_restonia_crystal_block",
            "inputs":[
                'mysticalagriculture:supremium_block',
                'jdte:life_apple',
                'occultism:afrit_essence',
                'powah:crystal_nitro'
            ],
            "base":'actuallyadditions:restonia_crystal_block',
            "color":10365735,
            "energy":50000,
            "time":500,
        },
        {
            "output":'4x extendedae_plus:infinity_core',
            "inputs":[
                'ae2omnicells:omni_cell_component_256m',
                'ae2lt:firmament_alloy_ingot',
                'occultism:storage_stabilizer_tier4',
                'ae2lt:ultimate_overload_core'
            ],
            "base":'extendedae_plus:basic_core',
            "color":10053196,
            "energy":50000,
            "time":500,
        }
    ]

    recipes.forEach(recipe =>{
        let output = parseItem(recipe.output)
        let inputs = createJsonArray()
        recipe.inputs.forEach(input =>{
            addToJsonArray(inputs,createDefaultJsonObject("item",input))
        })
        event.custom({
            "type": "actuallyadditions:empowering",
            "base": {
                "item": recipe.base
            },
            "color": recipe.color,
            "energy": recipe.energy,
            "modifiers": inputs,
            "result": {
                "count": output.getCount(),
                "id": output.getId()
            },
            "time": recipe.time
        }).id(prefix + recipe.output.substring(recipe.output.indexOf(":") + 1))
    })
})