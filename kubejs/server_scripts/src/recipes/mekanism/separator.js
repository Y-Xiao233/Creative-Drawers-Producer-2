ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/mekanism/separator/"

    const recipes = [
        {
            "left":"2400x mekanismgenerators:deuterium",
            "right":"2x mekanism:oxygen",
            "input":"kubejs:molten_lumin",
            "id":"molten_lumin"
        },
        {
            "left":"2400x mekanism_extras:rich_uranium_fuel",
            "right":"2400x mekanism_extras:rich_naquadah_fuel",
            "input":"kubejs:naquadah_uranium_fuel",
            "id":"naquadah_uranium_fuel"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.separating(recipe.left,recipe.right,recipe.input).id(prefix + recipe.id)
    })
})