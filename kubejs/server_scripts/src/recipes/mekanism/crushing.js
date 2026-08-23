ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/crushing/"

    const recipes = [
        {
            output:'cdp2:creative_shard_1',
            input:"#cdp2:creative_drawer/1",
            id:"creative_shard_1"
        },
        {
            output:'4x minecraft:prismarine_crystals',
            input:'minecraft:prismarine_shard',
            id:"prismarine_crystals"
        },
        {
            output:'4x minecraft:black_dye',
            input:'cdp2:void_block',
            id:"black_dye"
        },
        {
            output:'16x minecraft:egg',
            input:'minecraft:heart_of_the_sea',
            id:"egg"
        },
        {
            output:'4x forbidden_arcanus:arcane_crystal_dust',
            input:'forbidden_arcanus:arcane_crystal_block',
            id:"arcane_crystal_dust"
        },
        {
            output:'create:cinder_flour',
            input:'minecraft:netherrack',
            id:"cinder_flour"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.crushing(recipe.output, recipe.input).id(prefix + recipe.id)
    })
})