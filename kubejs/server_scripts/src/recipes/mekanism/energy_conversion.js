ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/energy_conversion/"
    
    const recipes = [
        {
            item:"cdp2:void_matter",
            energy:200,
            id:"void_matter"
        },
        {
            item:"cdp2:void_block",
            energy:800,
            id:"void_block"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.energy_conversion(recipe.item,recipe.energy).id(recipe.id)
    })
})