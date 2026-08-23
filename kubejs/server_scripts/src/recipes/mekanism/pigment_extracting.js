ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/pigment_extracting/"

    const recipes = [
        {
            pigment:"64x mekanism:red",
            input:"minecraft:apple",
            id:"red_from_apple"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.pigment_extracting(recipe.pigment,recipe.input).id(prefix + recipe.id)
    })
})