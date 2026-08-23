ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/crystallizing/"

    const recipes = [
        {
            output:'mekanism:pellet_antimatter',
            chamical:'10x mekanism:antimatter',
            id:"pellet_antimatter"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.crystallizing(recipe.output,recipe.chamical).id(prefix + recipe.id)
    })
})