ServerEvents.recipes(event =>{
    const prefix = "cdp2:recipes/create/item_application/"

    const recipes = [
        {
            "output":'create:andesite_casing',
            "block":'mekanismadditions:white_plastic',
            "hand":'create:andesite_alloy',
            "id":"andesite_casing"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.create.item_application(recipe.output,[recipe.block,recipe.hand]).id(prefix + recipe.id)
    })
})