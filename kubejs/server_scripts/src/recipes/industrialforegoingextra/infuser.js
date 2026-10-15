ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/industrialforegoingextra/infuser/"


    const recipes = [
        {
            "output":'powah:crystal_nitro',
            "item":'powah:crystal_spirited',
            "fluid":"1000x jdte:life_fluid_source",
            "id":"crystal_nitro"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.industrialforegoingextra.infuser(recipe.output,recipe.item,recipe.fluid,100).id(prefix + recipe.id)
    })
})