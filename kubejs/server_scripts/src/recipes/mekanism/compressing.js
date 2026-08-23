ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/compressing/"

    const recipes = [
        {
            "output":'mekmm:scrap_box',
            "input":'64x mekmm:scrap',
            "chemical":"200x mekmm:unstable_dimensional_gas",
            "id":"scrap_box"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.compressing(recipe.output,recipe.input,recipe.chemical,false).id(prefix + recipe.id)
    })
})