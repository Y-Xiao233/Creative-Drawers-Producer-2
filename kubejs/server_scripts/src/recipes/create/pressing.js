ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/create/pressing/"

    const recipes = [

    ]

    recipes.forEach(recipe =>{
        event.recipes.create.pressing(recipe.output,recipe.input).id(prefix + recipe.id)
    })
})