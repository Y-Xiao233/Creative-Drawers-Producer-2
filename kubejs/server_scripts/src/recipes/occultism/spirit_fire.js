ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/occultism/spirit_fire/"

    const recipes = [
        {
            "output":'occultism:otherworld_ashes',
            "input":'occultism:otherstone',
            "id":"otherworld_ashes"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.occultism.spirit_fire(recipe.output,recipe.input).id(prefix + recipe.id)
    })
})