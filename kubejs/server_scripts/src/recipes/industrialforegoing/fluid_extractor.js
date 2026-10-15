ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/industrialforegoing/fluid_extractor/"
    const AIR = Blocks.AIR.defaultBlockState()

    const recipes = [
        {
            "output":"16x industrialforegoing:latex",
            "input":'mekanismadditions:white_plastic',
            "breakChance":0.01,
            "result":AIR,
            "id":"latex"
        },
        {
            "output":"16x industrialforegoingextra:dragon_star_essence_source",
            "input":'industrialforegoingextra:dragon_star_block',
            "breakChance":0.01,
            "result":AIR,
            "id":"dragon_star_essence"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.industrialforegoing.fluid_extractor(recipe.output,recipe.input,recipe.breakChance,recipe.result,false).id(prefix + recipe.id)
    })
})