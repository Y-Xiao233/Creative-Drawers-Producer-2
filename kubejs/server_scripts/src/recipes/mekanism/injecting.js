ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/injecting/"

    const recipes = [
        {
            output:'minecraft:clay',
            input:'minecraft:gravel',
            chamical:"70x mekanism:water_vapor",
            id:"clay"
        },
        {
            output:'minecraft:dirt',
            input:'minecraft:gravel',
            chamical:"70x mekmm:nutritional_paste",
            id:"dirt"
        },
        {
            output:'cdp2:frame',
            input:'cdp2:void_block',
            chamical:"70x mekanism:water_vapor",
            id:"frame"
        },
        {
            output:'mysticalagriculture:nature_agglomeratio',
            input:'minecraft:sugar_cane',
            chamical:"70x mekmm:nutritional_paste",
            id:"nature_agglomeratio"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.injecting(recipe.output,recipe.input,recipe.chamical).id(prefix + recipe.id)
    })
})