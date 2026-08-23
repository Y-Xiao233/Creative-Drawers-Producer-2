ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/centrifuging/"

    const recipes = [
        {
            output:"mekanism:uranium_hexafluoride",
            input:"10000x mekanism:fissile_fuel",
            id:"uranium_hexafluoride"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.centrifuging(recipe.output,recipe.input).id(prefix + recipe.id)
    })
})