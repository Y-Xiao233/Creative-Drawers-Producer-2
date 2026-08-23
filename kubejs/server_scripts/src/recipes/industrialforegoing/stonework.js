ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/industrialforegoing/stonework/"

    const recipes = [
        {
            "output":'occultism:otherstone',
            "water":1000,
            "lava":1000,
            "consumeWater":0,
            "consumeLava":0,
            "id":"otherstone"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.industrialforegoing.stonework_generate(recipe.output,recipe.water,recipe.lava,recipe.consumeWater,recipe.consumeLava).id(prefix + recipe.id)
    })
})