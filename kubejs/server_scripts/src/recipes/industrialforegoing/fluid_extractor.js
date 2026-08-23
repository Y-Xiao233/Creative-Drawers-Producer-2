ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/industrialforegoing/fluid_extractor/"
    const AIR = Blocks.AIR.defaultBlockState()

    const recipes = [
        {
            "output":"8x industrialforegoing:latex",
            "input":'ifeu:rubber_log',
            "breakChance":0.01,
            "result":AIR,
            "id":"latex"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.industrialforegoing.fluid_extractor(recipe.output,recipe.input,recipe.breakChance,recipe.result,false).id(prefix + recipe.id)
    })
})