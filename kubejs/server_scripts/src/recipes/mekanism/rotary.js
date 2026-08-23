ServerEvents.recipes(event =>{
    const prefix = "cdp2:"
    
    const recipes = [
        {
            chemical:'1x mekanism:sodium',
            fluid:"1x mekanism:brine",
            id:"sodium"
        },
        {
            chemical:"1x mekanism_extras:naquadah_uranium_fuel",
            fluid:"1x kubejs:naquadah_uranium_fuel",
            id:"naquadah_uranium_fuel"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.rotary(recipe.chemical,recipe.fluid,recipe.chemical,recipe.fluid).id(prefix + recipe.id)
    })
})