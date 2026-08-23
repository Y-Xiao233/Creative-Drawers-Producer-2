ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/create/mixing/"

    const recipes = [
        {
            "outputs":[
                'create:brass_casing'
            ],
            "inputs":[
                'create:brass_ingot',
                'create:andesite_casing'
            ],
            "id":"brass_casing"
        },
        {
            "outputs":[
                Fluid.of("ifeu:liquid_malic_acid",200)
            ],
            "inputs":[
                '16x minecraft:apple',
                Fluid.of("industrialforegoing:ether_gas",16),
                Fluid.of("industrialforegoing:pink_slime",120)
            ],
            "id":"liquid_malic_acid"
        },
        {
            "outputs":[
                Fluid.of("kubejs:molten_lumin",1000)
            ],
            "inputs":[
                'extendedcrafting:luminessence'
            ],
            "heat":1,
            "id":"molten_lumin"
        },
        {
            "outputs":[
                '16x ae2:sky_stone_block'
            ],
            "inputs":[
                '8x mysticalagriculture:sky_stone_essence',
                '16x minecraft:stone',
                Fluid.of("minecraft:lava",100)
            ],
            "id":"sky_stone_block"
        },
        {
            "outputs":[
                Fluid.of("kubejs:molten_firmament",1000)
            ],
            "inputs":[
                'ae2lt:firmament_alloy_ingot'
            ],
            "heat":2,
            "id":"molten_firmament"
        },
    ]

    recipes.forEach(recipe =>{
        if(recipe.heat === undefined){
            event.recipes.create.mixing(recipe.outputs,recipe.inputs).id(prefix + recipe.id)
        }else if(recipe.heat === 1){
            event.recipes.create.mixing(recipe.outputs,recipe.inputs).heated().id(prefix + recipe.id)
        }else if(recipe.heat === 2){
            event.recipes.create.mixing(recipe.outputs,recipe.inputs).superheated().id(prefix + recipe.id)
        }
    })
})