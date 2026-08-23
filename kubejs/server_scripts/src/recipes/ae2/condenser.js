ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/ae2/condenser/"

    const recipes = [
        {
            "output":'minecraft:bee_spawn_egg',
            "power":600,
            "catalyst":[
                'ae2lt:firmament_alloy_ingot'
            ]
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.ae2mcr.condenser(recipe.output,recipe.power,recipe.catalyst).id(prefix + recipe.output.substring(recipe.output.indexOf(":") + 1))
    })
})